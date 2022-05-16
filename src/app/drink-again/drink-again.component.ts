import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css']
})
export class DrinkAgainComponent {
  @Input() isNew?= false;

  constructor() { }


}
