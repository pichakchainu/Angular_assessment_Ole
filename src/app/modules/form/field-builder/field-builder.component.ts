import { Component, Input, OnInit } from '@angular/core';
import { JsonFormControls } from '../models/json-form-dynamic.model';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.css']
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:JsonFormControls;
  @Input() form:any;

  get isValid() { return this.form.controls[this.field.key].valid; }
  get isDirty() { return this.form.controls[this.field.key].dirty; }

  constructor() { }
  ngOnInit() {
  }

}
