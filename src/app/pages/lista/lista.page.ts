import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public users: Observable<any>;
  // public users: Array<any>;

  @ViewChild('lista') lista: IonList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    /*
    this.dataService.getUsers().subscribe(
      response => {
        console.log(response);
        this.users = <any>response;
      }
    )
    */

    this.users = this.dataService.getUsers();
  }

  favorite(usuario) {
    console.log("favorite", usuario);

    this.lista.closeSlidingItems();
  }

  share(usuario) {
    console.log("share", usuario);
    this.lista.closeSlidingItems();
  }

  borrar(usuario) {
    console.log("borrar", usuario);
    this.lista.closeSlidingItems();
  }
}
