import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  constructor(
    private http: Http
  ) { }

  loadConfig() {
    return new Promise((resolve, reject) => {
      this.http.get('config.json')
        .pipe(map(res => res.json()))
        .pipe(catchError((error) => {
          console.error('Error while loading configuration', error);
          return throwError(error);
        }))
        .subscribe((data) => {
          this.config = data;
          if (this.config.production) {
            this.http.get('/config')
              .pipe(map(res => res.json()))
              .pipe(catchError((error) => {
                console.error('Error while loading configuration from server', error);
                return throwError(error);
              }))
              .subscribe((serverData) => {
                this.config = serverData;
                resolve(true);
              });
          }
          resolve(true);
        });
    });
  }

  get(key: any) {
    return this.config[key] ? this.config[key] : undefined;
  }
}
