import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { HerosComponent } from "./component/heros/heros.component";
import { HeroComponent } from './component/hero/hero.component';
import { SearchdisplayComponent } from './component/searchdisplay/searchdisplay.component';

const APP_ROUTES: Routes =[
    
    {path: "Home", component: HomeComponent},
    {path: "About", component: AboutComponent},
    {path: "Heros", component: HerosComponent},
    {path: "hero/:id", component: HeroComponent},
    {path: "search/:textToSearch",component: SearchdisplayComponent,},
    {path: "**", pathMatch: "full", redirectTo: "Home"},
    

]; 

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
