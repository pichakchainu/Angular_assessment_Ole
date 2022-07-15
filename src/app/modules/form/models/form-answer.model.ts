export interface AnswerOptions{
  value:string;
}
export interface FormAnswer {
  type: string;
  question:string;
  value?: string;
  options?: AnswerOptions[];
}
