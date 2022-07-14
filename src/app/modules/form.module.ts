import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form.routing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderComponent } from './form/dynamic-form-builder/dynamic-form-builder.component';
import { TextBoxComponent } from './form/dynamic-controls/textbox/textbox.component';
import { CheckBoxListComponent } from './form/dynamic-controls/checkbox-list/checkbox-list.component';
import { FieldBuilderComponent } from './form/field-builder/field-builder.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilderComponent } from './form/form-builder/form-builder.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    DynamicFormBuilderComponent,
    TextBoxComponent,
    CheckBoxListComponent,
    FieldBuilderComponent,
    FormBuilderComponent
  ]
})
export class FormModule { }
