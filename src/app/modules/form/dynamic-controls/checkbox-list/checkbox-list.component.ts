import { Component, Input, OnInit } from '@angular/core';
import { JsonFormControls } from '../../models/json-form-dynamic.model';

@Component({
  selector: 'checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.css']
})
export class CheckBoxListComponent implements OnInit {
  @Input() control:JsonFormControls;
  @Input() form:any;

  ngOnInit() {
  }



}
