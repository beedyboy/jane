import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(private regService: RegisterService, private router: Router) { }
  public msg = null;

  @Input() regForm: FormGroup;

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 100) + 'k';
    }

    return value;
  }
  setUp() {
    console.log(this.regForm.value);
    if (this.regForm.invalid) {
      return ;
    } else {
      this.regService.save(this.regForm.value)
      .subscribe(res => {
        if (res.status === 400) {
          this.msg = res.msg;

        } else {
          this.router.navigate(['/']);
        }


      });
    }
  }
}

