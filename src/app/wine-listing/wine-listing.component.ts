import { Component } from '@angular/core';
import { wines } from '../data';


@Component({
  selector: 'app-wine-listing',
  templateUrl: './wine-listing.component.html',
  styleUrls: ['./wine-listing.component.css']
})
export class WineListingComponent{
  wines = wines;

  wineLists = this.wines;



}
