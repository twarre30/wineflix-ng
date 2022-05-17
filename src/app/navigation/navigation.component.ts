import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  home = "Home";
  reds = "Reds";
  whites = "Whites";
  blends = "Blends";
  linkUrl = "https://developer.mozilla.org";

}
