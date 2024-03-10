import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { HerosComponent } from "./component/heros/heros.component";
const APP_ROUTES: Routes =[
    
    {path: "Home", component: HomeComponent},
    {path: "About", component: AboutComponent},
    {path: "Heros", component: HerosComponent},

    {path: "**", pathMatch: "full", redirectTo: "Home"}
]; 

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
