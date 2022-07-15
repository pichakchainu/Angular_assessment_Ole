import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonFormControls } from '../models/json-form-dynamic.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicBuildFormsService {

constructor(private fb: FormBuilder) { }

createForm(controls: JsonFormControls[]) {
 let myForm: FormGroup = this.fb.group({});
  let fieldsControls:any={};
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

    if(control.type!=='checkbox-list'){
      fieldsControls[control.key] = new FormControl(control.value || '', validatorsToAdd)
    } else{
      let opts:any={};
      if(control.options){
        for (let opt of control.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
      }
      fieldsControls[control.key] = new FormGroup(opts);
    }
  }
  myForm = new FormGroup(fieldsControls);
  return myForm;
}

}
