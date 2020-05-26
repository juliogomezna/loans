import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoanViewComponent } from './loan-view/loan-view.component';
import { LoanListComponent } from './loan-view/loan-list/loan-list.component';
import { LoanDetailComponent } from './loan-view/loan-detail/loan-detail.component';
import { informComponent } from './loan-view/informs/inform.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'request', component: LoanViewComponent },
  { path: 'requests', component: LoanListComponent},
  { path: 'requests/:id', component: LoanDetailComponent},
  { path: 'inform', component: informComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
