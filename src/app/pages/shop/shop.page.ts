import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  categories!: Category[];
  
  products: Product[];

  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 4.2,
    slidesOffsetBefore: 0,
  };

  constructor() {
    this.categories = this.getCategories();
    this.products = this.getProducts();
  }

  ngOnInit() {}

  getCategories() {
    return [
      { name: 'Vegetables', image: 'assets/categories/1.jpg' },
      { name: 'Bakery', image: 'assets/categories/2.jpg' },
      { name: 'Drinks', image: 'assets/categories/6.jpg' },
      { name: 'Meat & Eggs', image: 'assets/categories/3.jpg' },
      { name: 'Fruits', image: 'assets/categories/5.jpg' },
      { name: 'Others', image: 'assets/categories/4.jpg' },
    ];
  }

  getProducts() {
    return [
      {
        id: 1,
        price: 4.99,
        name: 'Tanque estacionario',
        image: 'assets/items/estacionario.jpg',
      },
      {
        id: 2,
        price: 6.66,
        name: 'Regulador de gas',
        image: 'assets/items/regulador.jpg',
      },
      {
        id: 3,
        price: 4.78,
        name: 'Chicken eggs',
        image: 'assets/items/portatil.jpg',
      },
      {
        id: 4,
        price: 5.78,
        name: 'Mangera de gas lp',
        image: 'assets/items/mangera.jpg',
      },
      {
        id: 4,
        price: 3.78,
        name: 'Perico',
        image: 'assets/items/perico.jpg',
      },
    ];
  }
}
