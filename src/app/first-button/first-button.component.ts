import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-button',
  templateUrl: './first-button.component.html',
  styleUrls: ['./first-button.component.css']
})
export class FirstButtonComponent {
  faPlay = faPlay;
  title = "Drink";


  constructor() { }

}
