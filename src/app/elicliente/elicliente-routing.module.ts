import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliclientePage } from './elicliente.page';

const routes: Routes = [
  {
    path: '',
    component: EliclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliclientePageRoutingModule {}
