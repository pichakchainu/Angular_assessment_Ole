import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAnswerComponent } from './form/form-answer/form-answer.component';
import { FormBuilderComponent } from './form/form-builder/form-builder.component';

export const routes: Routes = [
  {
    path: 'builder',
    component: FormBuilderComponent
  },
  {
    path: 'answer',
    component: FormAnswerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class FormRoutingModule { }
