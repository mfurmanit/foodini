import { Component, OnInit } from '@angular/core';
import { RecipeService } from '~/app/services/recipe.service';
import { SimpleRecipe } from '~/app/model/simple-recipe';

@Component({
    selector: 'Recipes-List',
    templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
    recipes: SimpleRecipe[];
    isLoading = true;
    recipeImageUrl: string;

    constructor(private recipeService: RecipeService) {
        this.recipeImageUrl = this.recipeService.recipeImageUrl;
    }

    ngOnInit(): void {
    }

    onSubmit(args: any) {
        this.loadRecipes(args.object.text);
        this.hideKeyboard(args);
    }

    onClear(args: any) {
        this.recipes = null;
        this.hideKeyboard(args);
    }

    hideKeyboard(args: any) {
        const searchBar = args.object;
        searchBar.dismissSoftInput();
    }

    loadRecipes(query: string): void {
        this.isLoading = true;
        this.recipeService.getRecipes(query).subscribe(data => {
            this.recipes = data.results;
            this.isLoading = false;
        });
    }
}
