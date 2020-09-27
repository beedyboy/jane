import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstForm: new FormGroup({
        dob: new FormControl(null),
        gender: new FormControl(null, Validators.required),
        pregnant: new FormControl(null),
        breastfeeding: new FormControl(null),
        smoke: new FormControl(null),
       }),
      secondForm: new FormGroup({
        disease: new FormGroup({
          depression: new FormControl(null),
          diabetes: new FormControl(null),
          epilepsy: new FormControl(null),
          skinburn: new FormControl(null),
          neckpain: new FormControl(null),
          bp: new FormControl(null),
        }),
        fracture: new FormControl(null),
        duration: new FormControl(null),
       }),
       thirdForm: new FormGroup({
        tingling: new FormControl(null),
        swelling: new FormControl(null),
        redburning: new FormControl(null),
        improves: new FormControl(null),
        activity: new FormControl(null),
        ratepain: new FormControl(null)
       })

    });
  }

}
