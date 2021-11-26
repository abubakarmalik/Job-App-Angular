import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  persons: any;
  editPerson: any;
  minDate: any;

  // userlog = {
  //   email: 'test@it.com',
  //   password: '12345678',
  // };
  public gotId: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.persons = this.dataService.persons;
    // console.log(this.persons);
  }

  ngOnInit(): void {
    this.disableDate();
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.gotId = id;
      console.log(this.gotId);
      let data = JSON.parse(localStorage.getItem('alltask')!);
      this.persons = data;
      console.log(data);
      let data1 = this.persons.find((data: any) => data.name == this.gotId);
      JSON.stringify(data1);
      this.editPerson = data1;
      console.log(this.editPerson);
    });
    // let data = JSON.parse(localStorage.getItem('alltask')!);
    // console.log(data);

    // if (data) {
    //   let data1 = this.persons.find((data: any) => data.name == this.gotname);
    //   console.log(data1);
    // }

    // let data = JSON.parse(localStorage.getItem('alltask')!);
    // console.log(data);
    // let dataary = JSON.parse(data)
    // console.log('data' + data?.length);
    // let dataArr = JSON.parse()
    // for (let i = 0; i < data?.length; i++) {}
    // if (data) {
    //   let data1 = this.persons.find((data: any) => data.name == this.gotname);
    // console.log(data1);
    // console.log('data' + localStorage.getItem('alltask'));
    // let user = data.find(da => data.name == 'Usama')
    //   if (data) {
    //     this.editPerson = data1;
    //     console.log(this.editPerson);

    //   } else {
    //     console.log('invalid id');
    //   }
    // }
    // console.log(data);
    // this.persons = [];
    // this.persons = data;
    // console.log(this.persons);

    // let data1 = this.persons.find((data: any) => data.name == this.gotname);

    // console.lo9g('data = ', data1);

    // let data1 = JSON.parse(data);
    // let data1 = this.persons.find((data: any) => data.name == this.gotname);
    // console.log(data1);
    // console.log('?');
  }
  disableDate() {
    // let date = new Da
    let date = new Date();

    //get all user tasks

    //date == today

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
    console.log(this.minDate);
  }
  onSubmit(value: any) {
    console.log(this.persons);
    // console.log(this.editPerson);
    // console.log(value);
    // if (this.editPerson) {
    // this.editPerson = value;
    // console.log(value);

    // this.route.paramMap.subscribe((param:ParamMap)=>{
    //   let id = param.get('id');
    //   this.gotId = id;
    //   let data1 = this.persons.find((data: any) => data.name == this.gotId);
    // data1 == value;
    // console.log(data1)
    //  data1=value;
    // console.log(data1);
    // data1=value;
    this.editPerson = value;

    // this.editPerson=value;
    //  this.persons.push(value)
    //  this.persons.push(this.editPerson);
    // result = this.persons;
    localStorage.setItem('alltask', JSON.stringify(this.persons));

    //  this.persons = result;
    this.router.navigate(['allTask']);

    // });

    // let data = new Array();
    // let data = [];
    // data = this.editPerson;
    // let data =value;
    // console.log(data1)
    // data1 = data;
    // console.log(data)
    // data = this.editPerson;
    // localStorage.setItem('alltask', JSON.stringify(data));
    // this.router.navigate(['allTask']);
    // } else {
    //   alert('invalid');
    // }
  }
}
