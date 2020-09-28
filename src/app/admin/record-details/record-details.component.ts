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
  gender = 'Not available';
  dob = 'Not available';
  pregnant = 'Not available';
  breastfeeding = 'Not available';
  smoke = 'Not available';
  fracture = 'Not available';
  disease: any = [];
  duration = 'Not available';
  activity = 'Not available';
  improve = 'Not available';
  tingling = 'Not available';
  swelling = 'Not available';
  redburning = 'Not available';
  ratepain = 'Not available';
  created_at = 'Not available';

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
        this.gender = result.gender || 'Not available';
        this.dob = result.dob || 'Not available';
        this.pregnant = result.pregnant || 'Not available';
        this.breastfeeding = result.breastfeeding || 'Not available';
        this.smoke = result.smoke || 'Not available';
        this.fracture = result.fracture || 'Not available';
        this.disease = JSON.parse(result.disease);
        this.duration = result.duration || 'Not available';
        this.activity = result.activity || 'Not available';
        this.improve = result.improve || 'Not available';
        this.tingling = result.tingling || 'Not available';
        this.swelling = result.swelling || 'Not available';
        this.redburning = result.redburning || 'Not available';
        this.ratepain = result.ratepain || 'Not available';
        this.created_at = result.created_at || 'Not available';
      });
  }
}
