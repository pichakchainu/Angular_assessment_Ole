export interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

export interface JsonFormControlOptions {
  key: string;
  label:string,
  value: boolean;
}

export interface JsonFormControls {
  key: string;
  value: string;
  type: string;
  question:string;
  options?: JsonFormControlOptions[];
  validators: JsonFormValidators;
}
export interface JsonFormData {
  controls: JsonFormControls[];
}
