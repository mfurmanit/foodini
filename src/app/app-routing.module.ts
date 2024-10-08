import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { RecipeDetailsComponent, RecipeInstructionsComponent, RecipeOwnDetailsComponent } from '~/app/components';
import { RecipeSummaryComponent } from '~/app/components/recipe-summary/recipe-summary.component';
import { RecipesHomeComponent } from '~/app/components/recipes-home/recipes-home.component';
import { RecipeAddComponent } from '~/app/components/recipe-add/recipe-add.component';

const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesHomeComponent},
    {path: 'recipes/:id', component: RecipeDetailsComponent},
    {path: 'recipe-summary', component: RecipeSummaryComponent},
    {path: 'recipe-instructions', component: RecipeInstructionsComponent},
    {path: 'recipe-add', component: RecipeAddComponent},
    {path: 'recipe-own', component: RecipeDetailsComponent},
    {path: 'recipes-own/:id', component: RecipeOwnDetailsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
