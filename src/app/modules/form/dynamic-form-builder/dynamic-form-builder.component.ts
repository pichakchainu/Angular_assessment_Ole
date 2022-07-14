import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { JsonFormData,JsonFormControls } from '../models/json-form-dynamic.model';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit,OnDestroy  {
  jsonFormData: JsonFormData;
  // form: FormGroup;
  formGroupSubscribe: Subscription;

  // public fields: any[] = [
  //   {
  //     type: 'text',
  //     name: 'firstName',
  //     label: 'First Name',
  //     value: '',
  //     required: true,
  //   },
  //   {
  //     type: 'text',
  //     name: 'lastName',
  //     label: 'Last Name',
  //     value: '',
  //     required: true,
  //   },
  //   {
  //     type: 'text',
  //     name: 'email',
  //     label: 'Email',
  //     value: '',
  //     required: true,
  //   },
  //   {
  //     type: 'dropdown',
  //     name: 'country',
  //     label: 'Country',
  //     value: 'in',
  //     required: true,
  //     options: [
  //       { key: 'in', label: 'India' },
  //       { key: 'us', label: 'USA' }
  //     ]
  //   },
  //   {
  //     type: 'radio',
  //     name: 'country',
  //     label: 'Country',
  //     value: 'in',
  //     required: true,
  //     options: [
  //       { key: 'm', label: 'Male' },
  //       { key: 'f', label: 'Female' }
  //     ]
  //   },
  //   {
  //     type: 'checkbox',
  //     name: 'hobby',
  //     label: 'Hobby',
  //     required: true,
  //     options: [
  //       { key: 'f', label: 'Fishing' },
  //       { key: 'c', label: 'Cooking' }
  //     ]
  //   }
  // ];
  public myForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {
    this.jsonFormData={
      controls:[
        {
          type: 'text',
          name: 'firstName',
          label: 'First Name',
          value: '',
          validators:{
            required:true
          }
        },
        {
          type: 'text',
          name: 'lastName',
          label: 'Last Name',
          value: '',
          validators:{
            required:true
          }
        }
      ]

    }
   }

  ngOnInit() {
    this.createForm(this.jsonFormData.controls);
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
      console.log('this.myForm: ',this.myForm);

    }
  }

  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }

  ngOnDestroy(): void {
    this.formGroupSubscribe.unsubscribe();
  }
}
