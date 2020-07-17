import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  public data = Array(20);

  // @ViewChild se ocupa cuando quiero obtener un dato del html, en este caso el IonInfiniteScroll
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }

  loadData(evento) {
    console.log("cargando siguientes");

    setTimeout(() => {
      if (this.data.length > 50) {
        evento.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      evento.target.complete();
    }, 1000)
  }

}
