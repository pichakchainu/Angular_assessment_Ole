import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormAnswer } from '../models/form-answer.model';

@Component({
  selector: 'form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.css']
})
export class FormAnswerComponent implements OnInit {

  answers:FormAnswer[]=[];
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => this.answers=JSON.parse(params.params.data));
  }

  backToBuilder(){
    this.router.navigate(['/form/builder']);
  }
}
