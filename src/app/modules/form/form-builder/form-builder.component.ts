import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { DialogQuestionComponent } from '../dialog-question/dialog-question.component';
import { FormAnswer } from '../models/form-answer.model';
import { JsonFormControls } from '../models/json-form-dynamic.model';
import { DynamicBuildFormsService } from '../service/dynamic-build-forms.service';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myForm: FormGroup = this.fb.group({});
  jsonFields:JsonFormControls[] =[];
  // [
  //   {
  //     key: 'key1',
  //     question:'Please tell us about yourself *',
  //     type: 'text',
  //     value: '',
  //     validators:{
  //       required:true
  //     }
  //   },
  //   {
  //     key:'key2',
  //     question:'Please select the languages you know *',
  //     type: 'checkbox-list',
  //     value: '',
  //     options:[
  //       {
  //          key:"1",
  //          label:'Angular',
  //          value:false
  //         },
  //       {
  //          key:"2",
  //          label:'React',
  //          value:false
  //       },
  //       {
  //          key:"3",
  //          label:'Other',
  //          value:false
  //       }
  //    ],
  //    validators:{
  //     requiredTrue:true
  //   }
  //   }
  // ];
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private dynamicBuildFormsService:DynamicBuildFormsService,
    private router: Router) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogQuestionComponent);

    dialogRef.afterClosed().subscribe((result:JsonFormControls) => {
      result.key=`${result.type}-${this.jsonFields.length}`;
      this.jsonFields.push(result);
      this.myForm=this.dynamicBuildFormsService.createForm(this.jsonFields);
    });
  }

  reviewAnswer(event: any) {
    let item:FormAnswer[]=[];
    for (const field of this.jsonFields) {
      switch (field.type) {
        case 'text':
          item.push({
            type:field.type,
            question:field.question,
            value:event[field.key]
          })
          break;
        case 'checkbox-list':
          const itemCheckboxList:FormAnswer ={
            type:field.type,
            question:field.question,
            options:[]
          }
          itemCheckboxList.options=field.options.filter(x=>event[field.key][x.key]).map(x=>({value:x.label}));

          item.push(itemCheckboxList);
          break;

      }
    }
    this.router.navigate(['form/answer'], { queryParams: { data: JSON.stringify(item) } });
  }
}
