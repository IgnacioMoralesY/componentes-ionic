import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerchbarPageRoutingModule } from './serchbar-routing.module';

import { SerchbarPage } from './serchbar.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerchbarPageRoutingModule,
    PipesModule
  ],
  declarations: [SerchbarPage]
})
export class SerchbarPageModule {}
