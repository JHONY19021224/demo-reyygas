import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoPg3Page } from './pedido-pg3.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoPg3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoPg3PageRoutingModule {}
