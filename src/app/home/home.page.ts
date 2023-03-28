import { Component } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tipofrete: string = '';
  peso: string = '';
  distancia: string = '';
  unidade: string = '';
  res: number = 0;

  constructor() { }

  verificarRadio() {
    //if de desconto de distancia
    if (this.distancia <= '15') {

      //if de desconto de unidades
      if (this.unidade >= '5') {

        //if calculo de frete
        if (this.tipofrete === 'regular') {
          this.res = (((parseFloat(this.peso) * 0.6) + parseFloat(this.distancia) * 0.6) - 5) - 5;
        }
        else if (this.tipofrete === 'expresso') {
          this.res = (((parseFloat(this.peso) * 0.9) + parseFloat(this.distancia) * 0.9) - 5) - 5;
        }
        else {
          this.res = (((parseFloat(this.peso) * 1) + parseFloat(this.distancia) * 1) - 5) - 5;
        }
      }

      else {
        if (this.tipofrete === 'regular') {
          this.res = ((parseFloat(this.peso) * 0.6) + parseFloat(this.distancia) * 0.6) - 5;
        }
        else if (this.tipofrete === 'expresso') {
          this.res = ((parseFloat(this.peso) * 0.9) + parseFloat(this.distancia) * 0.9) - 5;
        }
        else {
          this.res = ((parseFloat(this.peso) * 1) + parseFloat(this.distancia) * 1) - 5;
        }
      }
    }

    else {
      //if de desconto de unidades
      if (this.unidade >= '5') {

        //if calculo de frete
        if (this.tipofrete === 'regular') {
          this.res = ((parseFloat(this.peso) * 0.6) + parseFloat(this.distancia) * 0.6) - 5;
        }
        else if (this.tipofrete === 'expresso') {
          this.res = ((parseFloat(this.peso) * 0.9) + parseFloat(this.distancia) * 0.9) - 5;
        }
        else {
          this.res = ((parseFloat(this.peso) * 1) + parseFloat(this.distancia) * 1) - 5;
        }
      }

      else {
        if (this.tipofrete === 'regular') {
          this.res = (parseFloat(this.peso) * 0.6) + parseFloat(this.distancia) * 0.6;
        }
        else if (this.tipofrete === 'expresso') {
          this.res = (parseFloat(this.peso) * 0.9) + parseFloat(this.distancia) * 0.9;
        }
        else {
          this.res = (parseFloat(this.peso) * 1) + parseFloat(this.distancia) * 1;
        }
      }
    }
  }
}


