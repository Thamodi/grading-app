import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Column } from '../../common/table/table.component';
import { RestService } from '../../../services/rest/rest.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-review-view',
  templateUrl: './review-view.component.html',
  styleUrls: ['./review-view.component.scss']
})
export class ReviewViewComponent implements OnInit {
  
  private routerSub: Subscription;
  attemptId:any;
  assignmentName :string;
  columns: Column[] = [
    {
      name:'question',
      displayName:'Question'
    },
    {
      name:'answer',
      displayName:'Answer'
    },
    {
      name:'result',
      displayName:'Result'
    }
  ]
  tableDetails: any[]= [];

  constructor(
    private restService: RestService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.routerSub = this.route.params.subscribe(params => {
       this.attemptId = data.attemptId;
       this.assignmentName = data.assignmentName;
    //   console.log(this.attemptId);
    // });
   
   }

  ngOnInit() {
    this.loadResults();
  }

  loadResults() { 
    this.tableDetails = [];
    this.restService.getResults(this.attemptId).subscribe((response) => {
      if (response.success) {
        if (response.results.length > 0) {
          response.results.forEach(element => {
            const tempObj = {
              id: element.id,
              question: element.question,
              answer: element.answer,             
              result: element.result    
            };
            this.tableDetails.push(tempObj);
          })    
          this.tableDetails = [...this.tableDetails];
          console.log(this.tableDetails);
        }
      }
    }, (error) => {
      console.error('Error while retrieving results', error);
      alert('Error while retrieving results');
    });
  }

}
