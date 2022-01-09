import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LProdBodegaPage } from './l-prod-bodega.page';

const routes: Routes = [
  {
    path: '',
    component: LProdBodegaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LProdBodegaPageRoutingModule {}
