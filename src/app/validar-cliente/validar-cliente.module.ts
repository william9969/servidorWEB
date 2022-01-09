import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarClientePageRoutingModule } from './validar-cliente-routing.module';

import { ValidarClientePage } from './validar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarClientePageRoutingModule
  ],
  declarations: [ValidarClientePage]
})
export class ValidarClientePageModule {}
