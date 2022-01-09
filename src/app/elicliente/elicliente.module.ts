import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliclientePageRoutingModule } from './elicliente-routing.module';

import { EliclientePage } from './elicliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliclientePageRoutingModule
  ],
  declarations: [EliclientePage]
})
export class EliclientePageModule {}
