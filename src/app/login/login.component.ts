import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { escapeLeadingUnderscores } from 'typescript';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // userlog = {
  //   email: 'usama@arpinax.com',
  //   password: '123456',
  // };
  role: any;
  validAuth = {
    value: false,
  };
  msgs = 'invalid !! fileds are required & password must be 6 characters';
  constructor(private router: Router) {
    // this.userlog = this.dataServise.logins;
  }

  ngOnInit(): void {}
  onSubmit(data: any) {
    // let userData = {
    //   email: 'usama@arpinax.com',
    //   password: '123456',
    // };
    // localStorage.setItem('admin', JSON.stringify(userData));
    // console.log(data);
    // localStorage.setItem('user', data);
    let user = JSON.parse(localStorage.getItem('users')!);

    // console.log(user);
    if (user) {
      // console.log('user is : ', user);
      // console.log('enter email is : ', data.email);
      let local = user.find((x: any) => x.email === data.email);
      // console.log('MActh email is : ', local.password);
      if (local) {
        if (data.email === local.email) {
          if (data.password === local.password) {
            console.log(
              'your email: ',
              local.email,
              '  your password: ',
              local.password
            );
            let check = (this.validAuth.value = true);
            localStorage.setItem('checkAuth', JSON.stringify(check));
            let token = {
              id: local.id,
              role: local.role,
            };
            localStorage.setItem('token', JSON.stringify(token));
            this.router.navigate(['/home']);
          } else {
            console.log('invalid');
            alert('Invalid Password');
            this.router.navigate(['/login']);
          }
        }
      } else {
        alert('Invalid Cridential');
        this.router.navigate(['/login']);
      }
    }
    // let user = JSON.parse(localStorage.getItem('user'))
    // if(data.email == user.emai){
    //   console.log('ok')
    // }

    // this.display();
    // const myData = JSON.parse(localStorage.getItem('user'));

    // localStorage.setItem('data');
    // console.log('Login Successfully');
    // console.log(data.email)
    // if(data.email!= this.userlog.email || data.password != this.userlog.password){
    //   console.error('invalid cridetial');
    // }
    // console.log('yes')
  }
  // Auth(){
  //   let user = localStorage.getItem('data');
  //   if(data.email=user.email){}
  // }
}
