import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;

  ngOnInit(): void {
  }
  submitStep1(): void {
    this.regForm.get('firstForm').get('gender').markAsTouched();
    this.regForm.get('firstForm').get('gender').updateValueAndValidity();

    console.log(this.regForm);
  }
}
