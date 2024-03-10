import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routes
import {AppRoutingModule} from './app.routes'; 


//services

//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HerosComponent } from './component/heros/heros.component';

@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
