import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoPg3PageRoutingModule } from './pedido-pg3-routing.module';

import { PedidoPg3Page } from './pedido-pg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoPg3PageRoutingModule
  ],
  declarations: [PedidoPg3Page]
})
export class PedidoPg3PageModule {}
