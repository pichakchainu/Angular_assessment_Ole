import { Component, OnInit } from '@angular/core';
import { JsonFormControls } from '../models/json-form-dynamic.model';

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

  selectedValue: string;

  questionType: QuestionItem[] = [
    {value: 'text', viewValue: 'Paragraph'},
    {value: 'checkbox-list', viewValue: ' Checkbox list'},
  ];

  item:JsonFormControls={
    key:'',
    type:'text',
    question:'',
    value:'',
    validators:{
            required:false
          }
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    return this.item;
  }

}
