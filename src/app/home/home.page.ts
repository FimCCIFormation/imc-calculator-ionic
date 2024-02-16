import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title:string = "IMC Calculator";

  height?:number;// ? peut être nullable
  weight?:number;
  imc!:number; // ! fait moi confiance, y'aura une valeur
  status?:string;

  isShowTrueForm!:boolean;

  cpt = 0;

  constructor() {
    this.height = 1.50; // FIXME changer val debug à 0
    this.weight = 50; // TODO
    this.imc = 0;
    this.status = "";
    this.isShowTrueForm = false;
  }

  computeIMC():void {
    console.log("dedans");
    this.imc = this.weight! / (this.height! * this.height!);
    console.log(this.imc);
    // toFixed return a string value, so we use parseFloat to parse it to number value
    this.imc = parseFloat(this.imc.toFixed(1));
    this.manageStatus();
  }

  manageStatus():void {
    // Gerer suivant l'indice la couleur à afficher (class css)
    // >18.5 danger, 
    // < 35 warning
    // au dessus 40 danger
    if (this.imc < 18.5 || this.imc > 40) {
      // rouge
      this.status = "danger";      
    } else if( this.imc > 18.5 && this.imc <= 30){
      // vert
      this.status = "success";      
      
    } else if(this.imc > 30 && this.imc < 40) {
      // orange
      this.status = "warning";      

    }
    
  }

  incremente(){
    console.log(this.cpt)
    this.cpt++;
    this.cpt += 1;
    this.cpt = this.cpt + 1;
  }

}
