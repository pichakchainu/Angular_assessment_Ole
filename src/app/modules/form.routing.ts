import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form/form-builder/form-builder.component';

export const routes: Routes = [
  {
    path: 'builder',
    component: FormBuilderComponent
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
