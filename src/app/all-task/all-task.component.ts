import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// import { DataService } from '../data.service';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css'],
})
export class AllTaskComponent implements OnInit {
  persons: any;
  change: any;
  public SelectedId: any;
  delData: any;
  public gotname: any;
  public token: any;
  public CurrentPerson: any;
  allTask: any;
  task: any;
  // let ids: number[]

  // private dataService: DataService

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token')!);
    console.log(this.token.id);
    let record = JSON.parse(localStorage.getItem('alltask')!);
    if (record) {
      this.persons = record;
      if (this.token.role === 'admin') {
        console.log(this.persons);
      } else {
        this.CurrentPerson = this.persons.filter(
          (data: any) => data.id == this.token.id
        );
        console.log('same id: ', this.CurrentPerson);
      }
    }
  }
  onDelete(id: any) {
    console.log('all :', this.persons);
    console.log('msg: ', id);

    if (confirm('Do you want to Delete?') == true) {
      let index = this.persons.findIndex((x: any) => x.msg === id);
      console.log(index);
      this.persons.splice(index, 1);
      localStorage.setItem('alltask', JSON.stringify(this.persons));
      this.ngOnInit();
    } else {
      this.router.navigate(['/allTask']);
    }
  }
  onSelect(edit: any) {
    this.router.navigate(['/allTask/edit', edit.name]);
  }
  onStatus(id: any) {
    // console.log(this.persons);
    let data = this.persons.find((x: any) => x.msg === id);
    // data.status = true;
    if (data.status === true) {
      data.status = false;
    } else {
      data.status = true;
    }
    // console.log(data.status);
    localStorage.setItem('alltask', JSON.stringify(this.persons));
    this.router.navigate(['allTask']);
  }
  onDetail(person: any) {
    this.router.navigate(['/allTask/detail', person.name]);
  }
}
