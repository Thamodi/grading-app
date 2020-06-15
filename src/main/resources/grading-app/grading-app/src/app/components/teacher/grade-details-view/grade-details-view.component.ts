import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Column } from '../../common/table/table.component';

@Component({
  selector: 'app-grade-details-view',
  templateUrl: './grade-details-view.component.html',
  styleUrls: ['./grade-details-view.component.scss']
})
export class GradeDetailsViewComponent implements OnInit {

  private routerSub: Subscription;
  course: any;
  courses: any[];
  username: string;
  columns: Column[] = [
    {
      name: 'student',
      displayName: 'Student'
    },
    {
      name: 'assignment',
      displayName: 'Assignment'
    },
    {
      name: 'date',
      displayName: 'Last Attempted Date'
    },
    {
      name: 'result',
      displayName: 'Last Attempt Result'
    }
  ]
  tableDetails: any[] = [];

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) { 
    this.routerSub = this.route.params.subscribe(params => {
      this.username = params.username;
      console.log(this.username);
    });
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(): any {
    this.restService.getTeacherCourses(this.username).subscribe((response) => {
      if (response.success) {
        if (response.courses.length > 0) {
          this.courses = response.courses;
        }
      }
    }, (error) => {
      console.error('Error while retrieving courses', error);
      alert('Error while retrieving courses');
    });
  }

  onCourseChange() {
    this.tableDetails = [];
    this.restService.getGrades(this.course.id).subscribe((response) => {
      if (response.success) {
        if (response.grades.length > 0) {
        response.grades.forEach(element => {
          const tempObj = {
            id: element.id,
            student: element.studentName,
            assignment: element.assignmentName,
            date: element.lastAttemptedDate,
            result: element.lastAttemptedResult
          };
          this.tableDetails.push(tempObj);
        })
        this.tableDetails = [...this.tableDetails];
        console.log(this.tableDetails);
        }
      }
    }, (error) => {
      console.error('Error while retrieving assignments', error);
      alert('Error while retrieving assignments');
    });
  }

}
