import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
    <div>username:</div>
      <div><input type="text" class="input"></div>
      <div>Password:</div>
      <div><input type="password" class="input"></div>
      <button class="btn1">Login</button>
      <a href="" class="a1">register</a>
    </div>
  `,
  styleUrls: ['./form.component.css']
})
export class FormComponent {

}
