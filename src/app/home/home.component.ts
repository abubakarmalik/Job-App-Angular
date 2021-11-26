import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // persons = PERSONS;
  // public id: any;
  public token: any;
  // public role: any;
  today: any;
  public daily: any;
  public adminDaliy: any;

  constructor() {
    // const isLoggedIn = this.auth.canActivate;
  }

  ngOnInit(): void {
    this.getDate();
    this.token = JSON.parse(localStorage.getItem('token')!);
    // console.log('token: ', this.token);

    //get
    let data = JSON.parse(localStorage.getItem('alltask')!);
    console.log('daily: ', data);

    let todayTask = data.filter((x: any) => x.date === this.today);
    console.log(todayTask);

    let role = this.token.role;
    console.log('role is: ', role);
    if (role === 'admin') {
      console.log('role is: ', role);
      this.adminDaliy = todayTask;
    } else {
      this.daily = todayTask.filter((x: any) => x.id === this.token.id);
    }
  }
  getDate() {
    let date = new Date();
    let day: any = date.getDate();
    let month: any = date.getMonth() + 1;
    let year: any = date.getFullYear();
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.today = year + '-' + month + '-' + day;
    console.log(this.today);
  }
}
