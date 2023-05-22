import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaPageRoutingModule } from './tienda-routing.module';

import { TiendaPage } from './tienda.page';
import { SearchbarPageModule } from 'src/app/componentes/searchbar/searchbar.module';
import { CategoryItemPageModule } from 'src/app/componentes/category-item/category-item.module';
import { FoodCardPageModule } from 'src/app/componentes/food-card/food-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaPageRoutingModule,
   SearchbarPageModule,
   CategoryItemPageModule,
   FoodCardPageModule
  ],
  declarations: [TiendaPage]
})
export class TiendaPageModule {}
