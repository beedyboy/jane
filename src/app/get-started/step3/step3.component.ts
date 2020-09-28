import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(private regService: RegisterService, private router: Router,
    private _snackBar: MatSnackBar) { }
  public msg = null;
  public sending = false;

  @Input() regForm: FormGroup;

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 100) + 'k';
    }

    return value;
  }
  openSnackBar() {
    this._snackBar.open('Data saved Successfully')
  }
  setUp() {
    if (this.regForm.invalid) {
      return ;
    } else {
      this.sending = true;
      this.regService.save(this.regForm.value)
      .subscribe(res => {
        this.sending = false;
        if (res.status === 400) {
          this.msg = res.msg;

        } else {
          this.openSnackBar();
          this.router.navigate(['/']);
        }


      });
    }
  }
}

