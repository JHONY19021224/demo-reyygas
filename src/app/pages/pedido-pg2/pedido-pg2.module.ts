import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoPg2PageRoutingModule } from './pedido-pg2-routing.module';

import { PedidoPg2Page } from './pedido-pg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoPg2PageRoutingModule
  ],
  declarations: [PedidoPg2Page]
})
export class PedidoPg2PageModule {}
