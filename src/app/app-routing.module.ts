import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RecipeInstructionsComponent, RecipesListComponent } from '~/app/components';
import { RecipeDetailsComponent } from '~/app/components';
import { RecipeSummaryComponent } from '~/app/components/recipe-summary/recipe-summary.component';

const routes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    { path: "recipes", component: RecipeDetailsComponent },
    // { path: "recipes", component: RecipesListComponent },
    { path: "recipes/:id", component: RecipeDetailsComponent },
    { path: "recipe-summary", component: RecipeSummaryComponent },
    { path: "recipe-instructions", component: RecipeInstructionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
