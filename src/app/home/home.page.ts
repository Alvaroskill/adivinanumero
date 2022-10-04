import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    number:number;
    solucion:number = this.numberAlt(1,100);


  constructor() {}


  numberAlt(a, b){

    return Math.round(Math.random()*(b-a)+parseInt(a));

  }

  Comprobador () {



  }




}



