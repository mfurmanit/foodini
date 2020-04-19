import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RecipesListComponent } from '~/app/components';
import { RecipeDetailsComponent } from '~/app/components';

const routes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    { path: "recipes", component: RecipesListComponent },
    { path: "recipes/:id", component: RecipeDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
