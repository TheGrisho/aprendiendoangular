import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { herosService } from '../services/heros.service';
@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
 
})
export class SearchdisplayComponent implements OnInit {
 
  heros:any[]=[];
  textToSearch!:string; 



  constructor(private activatedRoute:ActivatedRoute,
              private _herosService:herosService){

  }
  ngOnInit(){

    this.activatedRoute.params.subscribe(params =>{
      this.textToSearch=params["textToSearch"];
      this.heros = this._herosService.searchHero(params["textToSearch"])
      
    })


  }

}
