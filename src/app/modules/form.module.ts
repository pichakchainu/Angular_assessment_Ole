import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormRoutingModule } from './form.routing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderComponent } from './form/dynamic-form-builder/dynamic-form-builder.component';
import { TextBoxComponent } from './form/dynamic-controls/textbox/textbox.component';
import { CheckBoxComponent } from './form/dynamic-controls/checkbox/checkbox.component';
import { FieldBuilderComponent } from './form/field-builder/field-builder.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    FormComponent,
    DynamicFormBuilderComponent,
    TextBoxComponent,
    CheckBoxComponent,
    FieldBuilderComponent
  ]
})
export class FormModule { }
