import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-serchbar',
  templateUrl: './serchbar.page.html',
  styleUrls: ['./serchbar.page.scss'],
})
export class SerchbarPage implements OnInit {
  public albunes: any[] = [];
  public textoBuscar: string = '';

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.dataservice.getAlbunes().subscribe(
      response => { // o directamente la puedo llamar albunes
       this.albunes = response;

      }
    );
  }

  buscar(evento){
    //console.log(evento);
    this.textoBuscar = evento.detail.value;
  }

}
