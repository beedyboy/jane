import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
import { RegisterComponent } from './get-started/register/register.component';
import { LandingComponent } from './landing/landing.component';
import { RecordsComponent } from './admin/records/records.component';
import { RecordDetailsComponent } from './admin/record-details/record-details.component';



const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'get-started', component: RegisterComponent},
  {path: 'admin/records', component: RecordsComponent},
  {path: 'admin/records/view/:id', component: RecordDetailsComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {
  //   path: 'app',
  //   component: AppsComponent,
  //   children: [
  //     { path: 'inventory/:id', component: CategoryProductComponent, canActivate: [AuthGuard]},
  //     { path: 'product', component: ProductComponent},
  //     { path: 'home', component: HomeComponent},
  //     { path: 'outlet', component: OutletComponent, canActivate: [AuthGuard]},
  //     { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  //     { path: 'customer', component: CustomerComponent}
  //   ]
  // },

  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
