import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/modulos/category.model';
import { Food } from 'src/app/modulos/food.modulos';
import { FoodService } from '../../services/food.services';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  categories: category[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }


  getCategories(){
    this.categories =[
     
      {
        id: 1,
        label: 'Tanques',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3RQE3r7mkMyxoZ0tsEKJ87ZosdqOqg6yTA&usqp=CAU',
        active: true,
      },
      {
        id: 2,
        label: 'Reguladores',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQ65O4IDvZR81MMxoTbW_S0jEnuog1MV0Lg&usqp=CAU',
        active: false,
      },
      {
        id: 3,
        label: 'Coneciones',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsF03OK97maNWQfmWHGyJcR8VzZG9gNJKvA&usqp=CAU',
        active: false,
      },
      {
        id: 4,
        label: 'Tuberias',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEllgNxPDi8daXq505pQpRLOJ98ES8qmIfQ&usqp=CAU',
        active: false,
      },
    ];


  }

}
