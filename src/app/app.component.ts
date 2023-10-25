import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="form">
      <router-outlet></router-outlet>
      
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web1-login';
  user = "Mahmoud";
}
