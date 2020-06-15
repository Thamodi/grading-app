import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest/rest.service';
import { Column } from '../../common/table/table.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  studentCount:any;
  assignmentCount:any;
  averageTimeSpent:any;
  assignments:any[];
  assignment:any;
  columns: Column[] = [
    {
      name: 'question',
      displayName: 'Question'
    },
    {
      name: 'averageTime',
      displayName: 'Average Time'
    },
    {
      name: 'correct',
      displayName: 'Correct Answers'
    },
    {
      name: 'incorrect',
      displayName: 'Incorrect Answers'
    }
  ]
  tableDetails: any[] = [];

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.loadStatistics();
    this.loadAssignments();
  }

  loadStatistics(): any {
    this.restService.getStatistics().subscribe((response) => {
      if (response.success) {
         this.studentCount = response.data.studentCount;
         this.assignmentCount = response.data.assignmentCount;
         this.averageTimeSpent = '2.3';
      }  
    }, (error) => {
      console.error('Error while loading statistics', error);
      alert('Error while loading statistics');
    });
  }

  loadAssignments(): any {
    this.restService.getAllAssignments().subscribe((response) => {
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
    this.restService.getQuestionAnswerResults(this.assignment.id).subscribe((response) => {
      if (response.success) {
        if (response.results.length > 0) {
          response.results.forEach(element => {
            const tempObj = {
              id: element.id,
              question: element.question,
              averageTime: element.averageTime,
              correct: element.correctAnwsers,
              incorrect: element.incorrectAnswers
            };
            this.tableDetails.push(tempObj);
          })
          this.tableDetails = [...this.tableDetails];
          console.log(this.tableDetails);
        }
      }
    }, (error) => {
      console.error('Error while retrieving data', error);
      alert('Error while retrieving data');
    });
  }

  


}
