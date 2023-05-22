import { Component, Input } from '@angular/core';
import { Food } from 'src/app/modulos/food.modulos';

@Component({
  selector: 'app-Food-card',
  templateUrl: './Food-card.page.html',
  styleUrls: ['./Food-card.page.scss'],
})
export class FoodCardPage  {
 @Input() item: Food | undefined;
 

}
