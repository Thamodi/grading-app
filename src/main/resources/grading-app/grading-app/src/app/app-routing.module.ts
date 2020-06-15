import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DetailViewComponent } from './components/student/detail-view/detail-view.component';
import { ReviewViewComponent } from './components/student/review-view/review-view.component';
import { GradeDetailsViewComponent } from './components/teacher/grade-details-view/grade-details-view.component';
import { StatisticsComponent } from './components/teacher/statistics/statistics.component';


const routes: Routes = [
  {    
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {    
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'student-details/:username',
    component: DetailViewComponent
  },
  {
    path: 'teacher-details/:username',
    component: GradeDetailsViewComponent
  },
  {
    path: 'teacher-statistics/:username',
    component: StatisticsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
