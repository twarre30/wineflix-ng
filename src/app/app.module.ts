import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstButtonComponent } from './first-button/first-button.component';
import { SecondButtonComponent } from './second-button/second-button.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { HeroControlsComponent } from './hero-controls/hero-controls.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';
import { KeepDrinkingComponent } from './keep-drinking/keep-drinking.component';
import { WineListingComponent } from './wine-listing/wine-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    UserAvatarComponent,
    NavBarComponent,
    FirstButtonComponent,
    SecondButtonComponent,
    HeroContentComponent,
    HeroControlsComponent,
    DrinkAgainComponent,
    KeepDrinkingComponent,
    WineListingComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
