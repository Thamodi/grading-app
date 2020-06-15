import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: any = {
    username: null,
    type: null
  };

  constructor() { }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  getUsername() {
    return this.user.username;
  }

  getUserType() {
    return this.user.type;
  }

}
