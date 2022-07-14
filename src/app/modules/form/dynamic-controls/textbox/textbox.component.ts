import { Component, Input, OnInit } from '@angular/core';
import { JsonFormControls } from '../../models/json-form-dynamic.model';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() control:JsonFormControls;
  @Input() form:any;

  constructor() { }

  ngOnInit() {
  }

}
