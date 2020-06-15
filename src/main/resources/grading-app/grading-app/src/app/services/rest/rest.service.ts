import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly COLON: string = ':';
  private readonly SLASH: string = '/';

  private baseUrl: string;

  constructor(
    private http: Http,
    private config: ConfigService,
  ) {
    this.baseUrl = this.getHTTPProtocol()
      + (this.config.get('host') ? this.config.get('host') : window.location.hostname)
      + (this.config.get('port') ? (this.COLON + this.config.get('port')) :
        ((window.location.port !== '') ? (this.COLON + window.location.port) : ''))
      + this.SLASH
      + this.config.get('context')
      + this.SLASH;
  }

  private getHTTPProtocol() {
    if (this.config.get('ssl')) {
      return 'https://';
    } else {
      return 'http://';
    }
  }

  get(url) {
    return this.http.get(this.baseUrl + url, this.getOptions())
      .pipe(map((res: Response) => {
        return res.json() || {};
      }))
      .pipe(catchError((error) => {
        console.error('Error while calling the Rest Service', error);
        return throwError(error);
      }));
  }

  post(url, body) {
    return this.http.post(this.baseUrl + url, body, this.getOptions())
      .pipe(map((res: Response) => {
        return res.json() || {};
      }))
      .pipe(catchError((error) => {
        console.error('Error while calling the Rest Service', error);
        return throwError(error);
      }));
  }

  getOptions() {
    const options = new RequestOptions({
      headers: this.getAuthHeaders()
    });
    return options;
  }

  getAuthHeaders() {
    const headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return headers;
  }

  login(data): Observable<any> {
    return this.post('user/login', data);
  }

  getStudentCourses(data): Observable<any> {
    console.log(data);
    return this.get('studentcourse/getcourses/'+ data);    
  }

  getAssignments(data): Observable<any> {
    console.log(data);
    return this.get('assignment/getassignments/'+ data);    
  }

  getAllAssignments(): Observable<any> {
    return this.get('assignment/getassignments');    
  }

  getAttemptDetails(data): Observable<any> {
    console.log(data);
    return this.get('assignment/getAssignmentAttempts/'+ data.username + '/' + data.assignment_id );    
  }

  getResults(data): Observable<any> {
    console.log(data);
    return this.get('result/getresults/'+ data);    
  }

  getTeacherCourses(data): Observable<any> {
    console.log(data);
    return this.get('teacher/getcourses/'+ data);    
  }

  getGrades(data): Observable<any> {
    console.log(data);
    return this.get('teacher/getgrades/'+ data);    
  }

  getStatistics(): Observable<any> {
    return this.get('statistics/getstatistics');    
  }

  getQuestionAnswerResults(data): Observable<any> {
    console.log(data);
    return this.get('question/getQuestionAnswerResults/'+ data);    
  }



}