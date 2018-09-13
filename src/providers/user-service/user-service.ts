import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUsers() {
    return this.http.get('http://bdcc4bad.ngrok.io/api/clients/v1/orders.json?client_user_email=cafemanizales@mrquick.co&client_user_token=K5pbDhWeh5NB6ep_t2V7');
  }

}
