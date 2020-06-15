import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestService } from '../../../services/rest/rest.service';
import { Column } from '../../common/table/table.component';
import { ReviewViewComponent } from '../review-view/review-view.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  private routerSub: Subscription;
  course: any;
  assignment: any;
  courses: any[];
  assignments: any[];
  username: string;
  columns: Column[] = [
    {
      name: 'course',
      displayName: 'Course Name'
    },
    {
      name: 'assignment',
      displayName: 'Assignment'
    },
    {
      name: 'attempt',
      displayName: 'Attempt'
    },
    {
      name: 'date',
      displayName: 'Attempted Date'
    },
    {
      name: 'result',
      displayName: 'Attempt Result'
    },
    {
      name: 'action',
      displayName: 'Actions'
    }
  ]
  tableDetails: any[] = [];

  constructor(private route: ActivatedRoute, private restService: RestService, public dialog: MatDialog) {
    this.routerSub = this.route.params.subscribe(params => {
      this.username = params.username;
      console.log(this.username);
    });
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(): any {
    this.restService.getStudentCourses(this.username).subscribe((response) => {
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
    this.assignments = [];
    this.assignment = null;
    this.tableDetails = [];
    this.restService.getAssignments(this.course.id).subscribe((response) => {
      if (response.success) {
        if (response.assignments.length > 0) {
          this.assignments = response.assignments;
        }
      }
    }, (error) => {
      console.error('Error while retrieving assignments', error);
      alert('Error while retrieving assignments');
    });
  }

  onAssignmentChange() {
    this.tableDetails = [];
    this.restService.getAttemptDetails({
      username: this.username,
      assignment_id: this.assignment.id
    }).subscribe((response) => {
      if (response.success) {
        if (response.attemptdetails.length > 0) {
          response.attemptdetails.forEach(element => {
            const tempObj = {
              id: element.id,
              course: this.course.name,
              assignment: this.assignment.name,
              attempt: element.value,
              date: element.attemptedDate,
              result: element.result,
              action: 'Review'
            };
            this.tableDetails.push(tempObj);
          })
          this.tableDetails = [...this.tableDetails];
          console.log(this.tableDetails);
        }
      }
    }, (error) => {
      console.error('Error while retrieving table data', error);
      alert('Error while retrieving table data');
    });
  }

  actionClick(item) {
    this.dialog.open(ReviewViewComponent, {
      data: {
        assignmentName: item.assignmentName,
        attemptId: item.attemptId
      }
    });
  }

}
