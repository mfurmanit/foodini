import { Component } from '@angular/core';
import { RecipeService } from '~/app/services/recipe.service';
import { SimpleRecipe } from '~/app/model/simple-recipe';
import { isNullOrUndefined } from '~/app/others/utils';
import { environment } from '~/assets/environment';

@Component({
    selector: 'Recipes-List',
    templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent {
    recipes: SimpleRecipe[];
    isLoading = false;
    apiImagesUrl: string;
    query: string;
    page: number = 0;

    constructor(private recipeService: RecipeService) {
        this.apiImagesUrl = environment.apiImagesUrl;
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

    private loadRecipes(query?: string): void {
        if (!isNullOrUndefined(query) && query != this.query) {
            this.query = query;
            this.page = 0;
        }

        this.isLoading = true;
        this.getRecipes();
    }

    private getRecipes(): void {
        this.recipeService.getRecipes(this.query, this.page).subscribe(data => {
            this.recipes = data.results;
            this.isLoading = false;
        });
    }
}
