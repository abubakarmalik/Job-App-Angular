import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task1';
  hideElement = false;

  constructor(public router: Router) {}
  shouldShow() {
    return !(
      this.router.url === '/login' ||
      this.router.url === '/signup' ||
      this.router.url === '/404'
    );
  }
  // *ngIf="router.url != '/404'"
}
