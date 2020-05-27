import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  // imagen = ['assets/img/moe.jpg','assets/img/nubes.jpg'];
  barra = ['assets/img/barra.jpg'];
  imagen = ['assets/img/Beer.png'];
  private _cuadro = ['assets/img/cuadro.png'];
  public get cuadro() {
    return this._cuadro;
  }
  public set cuadro(value) {
    this._cuadro = value;
  }
  dali=['assets/img/tomy.png'];

    mostrar(e){
    alert(`Esto no es museo no te lo vayas a llevar!! ahora me debes 1 $ `);
  }
  
  cerveza(e){
    alert(`Eres un alcohólico, disfrútalo!! son 5 $ `);
  }

  tomy(e){
    alert(`No estás grande para ver animados?!! son 5 $ `);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
