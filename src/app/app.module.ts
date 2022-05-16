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
    HeroControlsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
