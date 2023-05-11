import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FugasPageRoutingModule } from './fugas-routing.module';

import { FugasPage } from './fugas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FugasPageRoutingModule
  ],
  declarations: [FugasPage]
})
export class FugasPageModule {}
