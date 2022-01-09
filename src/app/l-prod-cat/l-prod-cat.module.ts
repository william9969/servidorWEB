import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LProdCatPageRoutingModule } from './l-prod-cat-routing.module';

import { LProdCatPage } from './l-prod-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LProdCatPageRoutingModule
  ],
  declarations: [LProdCatPage]
})
export class LProdCatPageModule {}
