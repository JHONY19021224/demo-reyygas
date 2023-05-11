import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FugasPage } from './fugas.page';

const routes: Routes = [
  {
    path: '',
    component: FugasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FugasPageRoutingModule {}
