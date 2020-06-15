import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

export interface Column {
  name: string;
  displayName: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Input('columns')
  displayedColumns: Column[] = [];

  @Input()
  data: any[] = [];

  @Output('action')
  onActionClick = new EventEmitter<any>();
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getColumnKeys() {
    let keys: string[] = [];
    this.displayedColumns.forEach(col => {
      keys.push(col.name);
    });
    return keys;
  }

  

  reviewRecord(assignmentName,attemptId) {
    this.onActionClick.emit({
      assignmentName:assignmentName,
      attemptId:attemptId
    });   
  }

}
