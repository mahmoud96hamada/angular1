import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Options } from '../options';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="h1">
    {{extra.age}}
      Login {{guestname}}
      </h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  guestname:String = "";
  extra:Options={
    size:"xl",
    age:27
  }
}
