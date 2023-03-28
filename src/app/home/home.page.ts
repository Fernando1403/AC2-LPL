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
    if (this.tipofrete === 'regular') {
      this.res = (parseFloat(this.peso) * 1.3) + (parseFloat(this.distancia) * 0.04) + 7;
    }
    else if (this.tipofrete === 'expresso') {
      this.res = (parseFloat(this.peso) * 1.5) + (parseFloat(this.distancia) * 0.06) + 10;
    }
    else {
      this.res = (parseFloat(this.peso) * 1.7) + (parseFloat(this.distancia) * 0.12) + 15;
    }
  }
}