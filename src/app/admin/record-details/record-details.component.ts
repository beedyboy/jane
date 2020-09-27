import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/services/register.service';
import { registerStore } from 'src/stores/register';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {
  store: any = registerStore;
  recordId = '';
  isLoadingResult = true;
  myData: any = [];
  id: number = null;
  gender = null;
  dob = null;
  pregnant = null;
  breastfeeding = null;
  smoke = null;
  fracture = null;
  disease = null;
  duration = null;
  activity = null;
  improve = null;
  tingling = null;
  swelling = null;
  redburning = null;
  ratepain = null;
  created_at = null;

  constructor(private route: ActivatedRoute, private service: RegisterService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recordId = id;
    this.loadDetails(id);
  }


  // tslint:disable-next-line: typedef
  loadDetails(id) {
    // tslint:disable-next-line: radix
    this.service.getRecordById(id)
      .subscribe((result) => {
        this.isLoadingResult = false;
        this.gender = result.gender;
        this.dob = result.dob;
        this.pregnant = result.pregnant;
        this.breastfeeding = result.breastfeeding;
        this.smoke = result.smoke;
        this.fracture = result.fracture;
        this.disease = JSON.parse(result.disease);
        this.duration = result.duration;
        this.activity = result.activity;
        this.improve = result.improve;
        this.tingling = result.tingling;
        this.swelling = result.swelling;
        this.redburning = result.redburning;
        this.ratepain = result.ratepain;
        this.created_at = result.created_at;
      });
  }
}
