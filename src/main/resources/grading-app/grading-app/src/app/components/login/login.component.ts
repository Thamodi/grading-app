import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  roles: any[] = [
    {
      value: 'student',
      displayValue: 'I\'m a student.'
    },
    {
      value: 'teacher',
      displayValue: 'I\'m a teacher.'
    }
  ]  
  username: string;
  password: string;
  type:string;

  constructor(
    private router: Router,
    private restService: RestService,
    private dataService:DataService
  ) { }

   login() {
    this.restService.login({
      username: this.username,
      password: this.password,
      type: this.type
    }).subscribe((response) => {
      if(response.valid){
        this.dataService.setUser({username: this.username, type: this.type});       
        if(this.type == 'student'){
          this.router.navigate(['/student-details', this.username] );
        }         
        else if(this.type == 'teacher'){
          this.router.navigate(['/teacher-details', this.username] );
        }
      }      
      else{
        alert("Incorrect Username or Password");
      }
        
     
    }, (error) => {
      console.error(error);
      alert(error.errorMsg);
     
    });
  }

  ngOnInit() {
  }

}
