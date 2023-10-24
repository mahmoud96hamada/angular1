import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form class="form">
      <app-header [guestname]=user></app-header>
      <app-form></app-form>
      <app-home></app-home>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web1-login';
  user = "ahmad";
}
