import { Component, OnInit } from '@angular/core';
import { RecipeService } from '~/app/services/recipe.service';
import { SimpleRecipe } from '~/app/model/simple-recipe';
import { isNullOrUndefined } from '~/app/others/utils';

@Component({
    selector: 'Recipes-List',
    templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent {
    recipes: SimpleRecipe[];
    isLoading = false;
    recipeImageUrl: string;
    query: string;
    page: number = 0;

    constructor(private recipeService: RecipeService) {
        this.recipeImageUrl = this.recipeService.recipeImageUrl;
    }

    onSubmit(args: any) {
        this.loadRecipes(args.object.text);
        this.hideKeyboard(args);
    }

    onClear(args: any) {
        this.recipes = null;
        this.hideKeyboard(args);
    }

    onNextPage() {
        if (this.recipes.length === 10) {
            this.page++;
            this.loadRecipes();
        }
    }

    onPreviousPage() {
        if (this.page > 0) {
            this.page--;
            this.loadRecipes();
        }
    }

    hideKeyboard(args: any) {
        const searchBar = args.object;
        searchBar.dismissSoftInput();
    }

    loadRecipes(query?: string): void {
        if (!isNullOrUndefined(query) && query != this.query) {
            this.query = query;
            this.page = 0;
        }

        this.isLoading = true;
        this.recipeService.getRecipes(this.query, this.page).subscribe(data => {
            this.recipes = data.results;
            this.isLoading = false;
        });
    }
}
