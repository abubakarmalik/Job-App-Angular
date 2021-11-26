import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  public token: any;
  public allUsers: any;
  public userInfo: any;
  minDate: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.disableDate();
    this.token = JSON.parse(localStorage.getItem('token')!);
    // console.log(this.token);
    this.allUsers = JSON.parse(localStorage.getItem('users')!);
    // console.log('alluser: ', this.allUsers);
    if (this.token.role === 'admin') {
      console.log('All users: ', this.allUsers);
      this.userInfo = this.allUsers.find((x: any) => x.id === this.token.id);
      console.log('user info here', this.userInfo);
    } else {
      this.userInfo = this.allUsers.find((x: any) => x.id === this.token.id);
      console.log('user info here', this.userInfo);
      // console.log('current user: ', this.userInfo);
      // console.log('current user: ', this.userInfo.name);
      // console.log('current user: ', this.userInfo.email);
    }
  }
  disableDate() {
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
    this.minDate = year + '-' + month + '-' + day;
    // console.log(this.minDate);
  }

  onSubmit(val: any) {
    let addData = {
      id: this.token.id,
      name: val.name,
      status: false,
      msg: val.msg,
      date: val.date,
    };

    console.log('you enter : ', addData);
    let data = localStorage.getItem('alltask');
    if (!data) {
      let a = [];
      a.push(addData);
      localStorage.setItem('alltask', JSON.stringify(a));
      this.router.navigate(['allTask']);
    } else {
      let data1 = JSON.parse(data);
      data1.push(addData);
      localStorage.setItem('alltask', JSON.stringify(data1));
      this.router.navigate(['allTask']);
    }

    // this.task.push(val);
    // localStorage.setItem('alltask', this.task);

    // if (val) {
    //   // var i = 0;
    //   // for (i; i < 10; val[i++]) {
    //   //   this.data = val;
    //   //   console.log(val);
    //   //   localStorage.setItem('Newperson', JSON.stringify(val));
    //   // }
    //   this.data = val;
    //   console.log(val);
    //   localStorage.setItem('Newperson', JSON.stringify(val));
    // }
  }
}
