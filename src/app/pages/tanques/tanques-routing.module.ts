import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TanquesPage } from './tanques.page';

const routes: Routes = [
  {
    path: '',
    component: TanquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TanquesPageRoutingModule {}
