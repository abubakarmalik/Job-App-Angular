import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  persons: any;
  public gotId: any;
  detail: any;
  user: any;
  token: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.gotId = id;
      console.log(this.gotId);
      let data = JSON.parse(localStorage.getItem('alltask')!);
      this.persons = data;
      console.log(data);
      let data1 = this.persons.find((data: any) => data.name == this.gotId);
      JSON.stringify(data1);
      this.detail = data1;
      console.log(this.detail);
    });
    this.token = JSON.parse(localStorage.getItem('token')!);
    console.log(this.token);
    this.user = JSON.parse(localStorage.getItem('users')!);
    console.log(this.user);
  }
}
