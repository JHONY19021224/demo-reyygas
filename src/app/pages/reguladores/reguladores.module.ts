import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReguladoresPageRoutingModule } from './reguladores-routing.module';

import { ReguladoresPage } from './reguladores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReguladoresPageRoutingModule
  ],
  declarations: [ReguladoresPage]
})
export class ReguladoresPageModule {}
