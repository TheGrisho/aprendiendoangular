import { Component, OnInit } from '@angular/core';
import { herosService, hero } from '../services/heros.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html'
})
export class HerosComponent implements OnInit {

  heros:hero[] = [];

  constructor( private _herosService:herosService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heros = this._herosService.getheros();
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
