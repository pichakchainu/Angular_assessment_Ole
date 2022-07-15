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
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilderComponent } from './form/form-builder/form-builder.component';
import { DialogQuestionComponent } from './form/dialog-question/dialog-question.component';
import { FormAnswerComponent } from './form/form-answer/form-answer.component';


@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [
    DynamicFormBuilderComponent,
    TextBoxComponent,
    CheckBoxListComponent,
    FieldBuilderComponent,
    FormBuilderComponent,
    DialogQuestionComponent,
    FormAnswerComponent
  ]
})
export class FormModule { }
