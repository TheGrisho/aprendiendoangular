import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',

})
export class HeroCardComponent {
constructor(private router: Router){
  
}
 @Input() hero: any ={}; 
 @Input() index!: number; 

 showHero(){
   
   this.router.navigate(["/hero",this.index]);
 }


      
}
