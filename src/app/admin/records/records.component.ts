import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IRecord } from 'src/app/interfaces/IRecord';
import { registerStore } from 'src/stores/register';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordsComponent implements OnInit {
  store = registerStore;
    // store: any =  registerStore;
  displayedColumns: string[] = ['id', 'gender',  'dob', 'smoke',   'fracture', 'actions' ];
    // 'pregnant',
    // 'breastfeeding',
  // 'disease',
    // 'duration',
    // 'activity',
    // 'improve',
    // 'tingling',
    // 'swelling',
    // 'redburning',
    // 'ratepain',
    // 'created_at'
  // dataSource: any;
  dataSource: MatTableDataSource<IRecord> | null;
  dataLength: number;
  isLoadingResult = true;

  constructor(
    private service: RegisterService,
    private router: Router
  ) { }


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line: typedef
  loadData() {
    this.service.list()
      .subscribe((result) => {
        this.isLoadingResult = false;
        this.store.setRecord(result);
        this.dataSource = new MatTableDataSource(this.store.records);
        this.dataLength = result.length;
        this.dataSource.paginator = this.paginator;


      });
  }
  // tslint:disable-next-line: typedef
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: typedef
  viewDetails(id) {
    this.router.navigate(['admin/records/view', id]);
   }

}
