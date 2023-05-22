import { Injectable } from '@angular/core';
import { Food } from '../modulos/food.modulos';

@Injectable({
    providedIn: 'root'
})

export class FoodService{
   
        getFoods(): Food[]{
        return[
            
            {
                find: 'any',
                id: 1,
                title: 'Cilindro',
                price: 2500,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn7e9eZQg4WkgfChrn87xxXrigLYgyghYZQ&usqp=CAU',
                description:'Cilindro para gas LP de 30 KG',
            },
            {
                find: 'any',
                id: 2,
                title: 'Cilindro',
                price: 2500,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn7e9eZQg4WkgfChrn87xxXrigLYgyghYZQ&usqp=CAU',
                description:'Cilindro para gas LP de 30 KG',
            },
            {
                find: 'any',
                id: 3,
                title: 'Cilindro',
                price: 2500,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn7e9eZQg4WkgfChrn87xxXrigLYgyghYZQ&usqp=CAU',
                description:'Cilindro para gas LP de 30 KG',
            },
            {
                find: 'any',
                id: 4,
                title: 'Cilindro',
                price: 2500,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn7e9eZQg4WkgfChrn87xxXrigLYgyghYZQ&usqp=CAU',
                description:'Cilindro para gas LP de 30 KG',
            },
            {
                find: 'any',
                id: 5,
                title: 'Cilindro',
                price: 2500,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn7e9eZQg4WkgfChrn87xxXrigLYgyghYZQ&usqp=CAU',
                description:'Cilindro para gas LP de 30 KG',
            },
            {
                find: 'any',
                id: 6,
                title: 'Cilindro',
                price: 2500,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn7e9eZQg4WkgfChrn87xxXrigLYgyghYZQ&usqp=CAU',
                description:'Cilindro para gas LP de 30 KG',
            },

 
                
             ]
        }

 getFood(id: number): Food{
    return this.getFood(id) .find((Food: { id: number; }) => Food.id ===id);
 }

}