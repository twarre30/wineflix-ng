import { Component, Input } from '@angular/core';
import { wines } from '../data';

@Component({
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css']
})
export class KeepDrinkingComponent {
  wine = wines;
  @Input() isFinished?= true;
  @Input() imageUrl = "";
  @Input() label = "";

}
