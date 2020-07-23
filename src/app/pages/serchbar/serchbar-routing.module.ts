import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerchbarPage } from './serchbar.page';

const routes: Routes = [
  {
    path: '',
    component: SerchbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerchbarPageRoutingModule {}
