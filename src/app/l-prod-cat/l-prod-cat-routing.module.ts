import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LProdCatPage } from './l-prod-cat.page';

const routes: Routes = [
  {
    path: '',
    component: LProdCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LProdCatPageRoutingModule {}
