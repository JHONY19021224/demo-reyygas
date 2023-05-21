import { Component, Input, } from '@angular/core';
import { category } from 'src/app/modulos/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.page.html',
  styleUrls: ['./category-item.page.scss'],
})
export class CategoryItemPage  {

    @Input() item!: category;

}
  