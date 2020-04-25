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
    recipeImageUrl: string;

    constructor(private recipeService: RecipeService) {
        this.recipeImageUrl = this.recipeService.recipeImageUrl;
    }

    ngOnInit(): void {
    }

    onSubmit(event: any) {
        this.loadRecipes(event.object.text);
    }

    loadRecipes(query: string): void {
        this.isLoading = true;
        this.recipeService.getRecipes(query).subscribe(data => {
            this.recipes = data.results;
            this.isLoading = false;
        });
    }
}
