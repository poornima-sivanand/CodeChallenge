import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolmentDetailComponent } from './components/enrolment-detail/enrolment-detail.component';
import { EnrolmentStatusComponent } from './components/enrolment-status/enrolment-status.component';
import { EnrolmentListComponent } from './components/enrolment-list/enrolment-list.component';

export const routes: Routes = [{
    path: 'enrolment',
    children: [
      {
        path: '',
        component: EnrolmentDetailComponent
      },
      {
        path: 'list',
        component: EnrolmentListComponent
      },
      {
        path: 'status',
        component: EnrolmentStatusComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolmentRoutingModule {}
