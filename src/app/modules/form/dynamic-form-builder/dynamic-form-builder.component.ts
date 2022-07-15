import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonFormControls } from '../models/json-form-dynamic.model';


@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit {
  @Input() jsonFields: JsonFormControls[]=[];
  @Input() form:any;
  @Output() onSubmit = new EventEmitter();

  fields:any;

  constructor() {
  }


  ngOnInit() {

  }


  submit() {
    this.onSubmit.emit(this.form.value)
  }

}
