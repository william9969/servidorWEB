import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LProdBodegaPageRoutingModule } from './l-prod-bodega-routing.module';

import { LProdBodegaPage } from './l-prod-bodega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LProdBodegaPageRoutingModule
  ],
  declarations: [LProdBodegaPage]
})
export class LProdBodegaPageModule {}
