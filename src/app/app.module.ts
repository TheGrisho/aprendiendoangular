import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routes
import {AppRoutingModule} from './app.routes'; 


//services
import { herosService } from './component/services/heros.service';
//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HerosComponent } from './component/heros/heros.component';
import { HeroComponent } from './component/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { SearchdisplayComponent } from './component/searchdisplay/searchdisplay.component';
import { HeroCardComponent } from './component/hero-card/hero-card.component';

@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroComponent,
    SearchdisplayComponent,
    HeroCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    herosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
