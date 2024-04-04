import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { herosService } from '../services/heros.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',

})
export class HeroComponent {
    //como si fuera un servicio 
  hero:any={}; 
    constructor( private activatedRoute: ActivatedRoute,
                  private _heroService:herosService){

      this.activatedRoute.params.subscribe(params =>{
        this.hero = this._heroService.getHero(params["id"])
      })

      

    }

}
