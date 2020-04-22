import { Component } from '@angular/core';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
import { RecipeService } from '~/app/services/recipe.service';
import { AnalyzedInstruction } from '~/app/model/analyzed-instruction';
import { Step } from '~/app/model/step';

@Component({
    selector: 'Recipe-Instructions',
    templateUrl: './recipe-instructions.component.html'
})
export class RecipeInstructionsComponent {
    recipe: ExtendedRecipe;
    instructions: AnalyzedInstruction[];
    step: Step;
    ingredientUrl = 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg';

    getIngredient(url:string): string {
        return `https://spoonacular.com/cdn/ingredients_250x250/${url}`;
    }

    constructor(private recipeService: RecipeService) {
        this.recipe = this.recipeService.recipe;
        this.instructions = this.recipeService.recipe.analyzedInstructions;
        this.step = this.recipeService.recipe.analyzedInstructions[0].steps[0];
        // this.step = this.instructions.steps[0];
        console.log(this.instructions);
        console.log('>>>> ' + this.recipe.image);
    }
}
