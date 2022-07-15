import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { JsonFormControlOptions, JsonFormControls } from '../models/json-form-dynamic.model';

interface QuestionItem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent implements OnInit {

  errors: string[] = [];
  questionType: QuestionItem[] = [
    {value: 'text', viewValue: 'Paragraph'},
    {value: 'checkbox-list', viewValue: ' Checkbox list'},
  ];

  item:JsonFormControls={
    key:'',
    type:'text',
    question:'',
    value:'',
    options:[],
    validators:{
            required:true
          }
  };

  questionAnswers:JsonFormControlOptions[]=[];

  constructor( public dialogRef: MatDialogRef<DialogQuestionComponent>) { }

  ngOnInit() {
  }

  addAnswer(){
    this.questionAnswers.push({key:'',label:'',value:false});
  }
  onSubmit(){
    if(this.validate())return;
    this.dialogRef.close(this.item);
  }

  validate() {
    this.errors=[];
    switch (this.item.type) {
      case 'text':
        this.validateTypeText(this.item);
        break;
      case 'checkbox-list':
        this.convertAnswers();
      this.validateTypeCheckBoxList(this.item);
        break;

    }
    return this.errors.length>0;
  }

  convertAnswers(){
    this.item.options=[];
    if(this.questionAnswers.length>0){
      this.questionAnswers.forEach((answer,index) => {
        this.item.options.push({key:`${index}`,label:answer.label,value:false});
      });
    }
  }

  validateTypeText(data:JsonFormControls){
    if(!data.question)
    {
      this.errors.push('Please enter question.');
    }
  }

  validateTypeCheckBoxList(data:JsonFormControls){
    if(!data.question)
    {
      this.errors.push('Please enter question.');
    }

    if(data.options?.length <=0){
      this.errors.push('Please add answer.');
    }else  if(data.options.filter(x=>!x.label).length>0){
      this.errors.push('Please add answer.');
    }
  }

}
