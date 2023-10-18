import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children:[{
      path:'',
      loadChildren: () => import('./recipes/recipes.module').then(m=> m.RecipesPageModule)
    },
    {
      path:':recipeId',
      loadChildren: './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
    }
   
    ]
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
