import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
import { Step1Component } from './get-started/step1/step1.component';
import { Step2Component } from './get-started/step2/step2.component';
import { DoneComponent } from './get-started/done/done.component';
import { RegisterComponent } from './get-started/register/register.component';
import { Step3Component } from './get-started/step3/step3.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';
import { RegisterService } from '../services/register.service';
import { RecordsComponent } from './admin/records/records.component';
import { RecordDetailsComponent } from './admin/record-details/record-details.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    PageNotFoundComponent,
    Step1Component,
    Step2Component,
    DoneComponent,
    RegisterComponent,
    Step3Component,
    RecordsComponent,
    RecordDetailsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MobxAngularModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
