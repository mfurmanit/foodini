import { Component } from '@angular/core';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
import { RecipeService } from '~/app/services/recipe.service';

@Component({
    selector: 'Recipe-Summary',
    templateUrl: './recipe-summary.component.html'
})
export class RecipeSummaryComponent {
    recipe: ExtendedRecipe;

    constructor(private recipeService: RecipeService) {
        this.recipe = this.recipeService.recipe;
    }

}
