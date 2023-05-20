import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReguladoresPage } from './reguladores.page';

const routes: Routes = [
  {
    path: '',
    component: ReguladoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReguladoresPageRoutingModule {}
