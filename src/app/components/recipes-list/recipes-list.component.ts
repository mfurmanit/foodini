import { Component, OnInit } from '@angular/core';
import { RecipeService } from '~/app/services/recipe.service';
import { SimpleRecipe } from '~/app/model/simple-recipe';

@Component({
    selector: 'Recipes-List',
    templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
    recipes: SimpleRecipe[];
    isLoading = false;
    baseUri: string;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
    }

    onSubmit(event: any) {
        this.loadRecipes(event.object.text);
    }

    loadRecipes(query: string): void {
        this.isLoading = true;
        this.recipeService.getRecipes(query).subscribe(data => {
            this.baseUri = data.baseUri;
            this.recipes = data.results;
            this.isLoading = false;
        });
    }
}
