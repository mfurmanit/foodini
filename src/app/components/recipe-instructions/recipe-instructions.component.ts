import { Component } from '@angular/core';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
import { RecipeService } from '~/app/services/recipe.service';
import { AnalyzedInstruction } from '~/app/model/analyzed-instruction';
import { Step } from '~/app/model/step';
import { SnackBarService } from '~/app/services/snack-bar.service';

@Component({
    selector: 'Recipe-Instructions',
    templateUrl: './recipe-instructions.component.html'
})
export class RecipeInstructionsComponent {
    recipe: ExtendedRecipe;
    instructions: AnalyzedInstruction[];
    step: Step;
    steps: number;
    stepNumber: number = 0;
    ingredientUrl = 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg';

    getIngredient(url:string): string {
        return `https://spoonacular.com/cdn/ingredients_250x250/${url}`;
    }

    getEquipment(url:string): string {
        return `https://spoonacular.com/cdn/equipment_250x250/${url}`;
    }

    constructor(private recipeService: RecipeService, private snackBarService: SnackBarService) {
        this.recipe = this.recipeService.recipe;
        this.instructions = this.recipeService.recipe.analyzedInstructions;
        this.steps = this.recipeService.recipe.analyzedInstructions[0].steps.length;
        this.goToStep();
    }

    nextStep(): void {
        if (this.steps > this.stepNumber + 1) {
            this.stepNumber++;
            this.goToStep();
        }
    }

    previousStep(): void {
        if (this.stepNumber > 0) {
            this.stepNumber--;
            this.goToStep();
        }
    }

    goToStep(): void {
        this.step = this.recipeService.recipe.analyzedInstructions[0].steps[this.stepNumber];
        if (this.stepNumber + 1 == this.steps)
            this.snackBarService.showSimple('Congratulations! That is the last step!')
    }

}
