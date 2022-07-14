import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  jsonFields=[
    {
      key: 'key1',
      question:'Please tell us about yourself *',
      type: 'text',
      value: '',
      validators:{
        required:true
      }
    },
    {
      key:'key2',
      question:'Please select the languages you know *',
      type: 'checkbox-list',
      value: '',
      options:[
        {
           key:"1",
           label:'Angular',
           value:false
          },
        {
           key:"2",
           label:'React',
           value:false
        },
        {
           key:"3",
           label:'Other',
           value:false
        }
     ],
     validators:{
      requiredTrue:true
    }
    }
  ];
  answer:any;
  constructor() { }

  ngOnInit() {
  }

  getFields(){
    return this.jsonFields
  }

  reviewAnswer(event: any) {
    console.log('Form : ', event);
    this.answer=event;
  }
}
