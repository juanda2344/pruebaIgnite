import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users;

  constructor(public navCtrl: NavController,public userService:UserServiceProvider) {

  }

  ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        
        this.users=data;
        console.log(data);
        debugger;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
