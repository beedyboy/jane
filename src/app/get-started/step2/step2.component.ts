import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;

  ngOnInit(): void {
  }


  submitStep2(): void {
    this.regForm.get('firstForm').get('companyEmail').markAsTouched();
    this.regForm.get('firstForm').get('companyEmail').updateValueAndValidity();

    console.log(this.regForm);
  }
}
