import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public porcentaje: number = 0.76;
  public rango: number;

  constructor() { }

  ngOnInit() {
    this.rango = this.porcentaje * 100;
  }

  cambioRango(evento){
    let valor = evento.detail.value;

    this.porcentaje = valor / 100;
    
  }
}
