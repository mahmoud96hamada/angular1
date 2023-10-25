import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Options } from '../options';
import { OptionList } from '../mock-optionList';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="x1">
      test 123
      <ul>
        <li *ngFor="let one of alloptions">
          <button (click)="selectOption(one)">
          the size of option is: {{one.size}} {{one.age}} <br/>
          </button>
        </li>
      </ul>
      <div *ngIf="selectedOptions">the selected option is: {{selectedOptions.size}} {{selectedOptions.age}}</div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Singleoption:Options={
    size:"123",
    age:33
  }
  selectedOptions?: Options
  selectOption(option:Options){
    this.selectedOptions = option
    console.log("the selected option is: ",option.size)
  }
  alloptions = OptionList
  SubmitApp(){
    console.log("xxx")
  }

}
