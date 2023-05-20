import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TanquesPageRoutingModule } from './tanques-routing.module';

import { TanquesPage } from './tanques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TanquesPageRoutingModule
  ],
  declarations: [TanquesPage]
})
export class TanquesPageModule {}
