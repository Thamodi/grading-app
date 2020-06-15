import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grading-app';

  constructor(
    private router: Router,
    public dataService: DataService
  ) {}

  routeTo(path) {
    switch (path) {
      case '':
        this.router.navigate(['']);
        break;
      case 'student-results':
        this.router.navigate(['/student-details', this.dataService.getUsername()]);
        break;
      case 'teacher-results':
        this.router.navigate(['/teacher-details', this.dataService.getUsername()]);
        break;
      case 'statistics':
        this.router.navigate(['/teacher-statistics', this.dataService.getUsername()]);
        break;
      default:
        break;
    }

  }

}
