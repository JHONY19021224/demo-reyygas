import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'pedido',
    loadChildren: () => import('./pages/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'fugas',
    loadChildren: () => import('./pages/fugas/fugas.module').then( m => m.FugasPageModule)
  },

  {
    path: 'set-productos',
    loadChildren: () => import('./backend/set-productos/set-productos.module').then( m => m.SetProductosPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./inicio/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./inicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./inicio/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'tanques',
    loadChildren: () => import('./pages/tanques/tanques.module').then( m => m.TanquesPageModule)
  },
  {
    path: 'reguladores',
    loadChildren: () => import('./pages/reguladores/reguladores.module').then( m => m.ReguladoresPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./pages/recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'conexiones',
    loadChildren: () => import('./pages/conexiones/conexiones.module').then( m => m.ConexionesPageModule)
  },  {
    path: 'tienda',
    loadChildren: () => import('./pages/tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./componentes/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'category-item',
    loadChildren: () => import('./componentes/category-item/category-item.module').then( m => m.CategoryItemPageModule)
  },
  {
    path: 'food-card',
    loadChildren: () => import('./componentes/food-card/food-card.module').then( m => m.FoodCardPageModule)
  },
  {
    path: 'pedido-pg2',
    loadChildren: () => import('./pages/pedido-pg2/pedido-pg2.module').then( m => m.PedidoPg2PageModule)
  },
  {
    path: 'pedido-pg3',
    loadChildren: () => import('./pages/pedido-pg3/pedido-pg3.module').then( m => m.PedidoPg3PageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
