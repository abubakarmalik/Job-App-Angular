import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  msgs = 'Please enter valid fill  fileds ';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signUp(value: any) {
    var ID = function (x: any) {
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    let v = ID(7);
    console.log(v);
    let setData = {
      id: v,
      email: value.email,
      name: value.name,
      // role: 'admin',
      role: 'user',
      password: value.password,
    };
    console.log(setData);
    if (setData) {
      let data = localStorage.getItem('users');
      if (!data) {
        let a = [];
        a.push(setData);
        localStorage.setItem('users', JSON.stringify(a));
        this.router.navigate(['/login']);
        alert('Register Successfully');
      } else {
        let data1 = JSON.parse(data);
        let check = data1.find((data: any) => data.email === value.email);
        if (check) {
          alert('This email already register');
          this.router.navigate(['/signup']);
        } else {
          data1.push(setData);
          localStorage.setItem('users', JSON.stringify(data1));
          this.router.navigate(['/login']);
          alert('Register Successfully');
        }
      }
    } else {
      this.router.navigate(['/login']);
      alert('Sorry ! enable to register');
    }
  }
}
