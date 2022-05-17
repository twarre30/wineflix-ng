import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-button',
  templateUrl: './second-button.component.html',
  styleUrls: ['./second-button.component.css']
})
export class SecondButtonComponent  {
  faInfoCircle = faInfoCircle;
  title = "More Info";



}
