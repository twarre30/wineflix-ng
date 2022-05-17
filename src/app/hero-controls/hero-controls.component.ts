import { Component } from '@angular/core';
import { heroContent } from '../data';

@Component({
  selector: 'app-hero-controls',
  templateUrl: './hero-controls.component.html',
  styleUrls: ['./hero-controls.component.css']
})
export class HeroControlsComponent {
  heroContent = heroContent;

  contents = this.heroContent;

}
