import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
recipesCategories: any = [];
recipes: any = [];
textSearch:string = '';
selectedCategory: string = 'Todos';


  constructor(
    
  ) { 
   
  }

  ngOnInit() {
  }

}
