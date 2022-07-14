import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormBuilderComponent } from './form/dynamic-form-builder/dynamic-form-builder.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: 'builder',
        component: DynamicFormBuilderComponent,

      },

    ]
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
