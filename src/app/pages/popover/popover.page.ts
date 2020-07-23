import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  async mostrarPop( evento ){
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

   // const { data } = await popover.onDidDismiss(); Se lanza cuando se cierra completamente el modal
   const { data } = await popover.onWillDismiss(); // se lanza cuando se esta por cerrar el modal

    console.log('Padre: ', data);
  }

  

}
