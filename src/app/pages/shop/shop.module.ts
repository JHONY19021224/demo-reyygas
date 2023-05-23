import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,
    CategoryItemModule,
    ProductCardModule,
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
