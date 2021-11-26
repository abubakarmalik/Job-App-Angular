import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  validAuth = {
    value: false,
  };
  role: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem('token')!);
    // console.log('ya wala token: ', token);
    // token.role = this.role;
    this.role = token.role;
    console.log(this.role);
  }
  logout() {
    let check = (this.validAuth.value = false);
    localStorage.setItem('checkAuth', JSON.stringify(check));
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
