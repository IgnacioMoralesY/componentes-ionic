import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private mnodalController: ModalController
  ) { }

  ngOnInit() {
  }

  async abrirModal(){

    const modal = await this.mnodalController.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'ignacio',
        'pais': 'chile'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log("Retorno del modal", data)
  }

}
