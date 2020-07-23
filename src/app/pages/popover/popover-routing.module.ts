import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPage } from './popover.page';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class PopoverPageRoutingModule {}
