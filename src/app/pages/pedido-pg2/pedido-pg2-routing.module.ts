import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoPg2Page } from './pedido-pg2.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoPg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoPg2PageRoutingModule {}
