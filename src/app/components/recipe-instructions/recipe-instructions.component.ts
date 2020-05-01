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
    amountOfSteps: number = 0;
    actualStepIndex: number = 0;

    constructor(private recipeService: RecipeService,
                private snackBarService: SnackBarService) {
        this.recipe = this.recipeService.recipe as ExtendedRecipe;
        this.instructions = this.recipe.analyzedInstructions;
        this.amountOfSteps = this.instructions[0].steps.length;
        this.goToStep();
    }

    nextStep(): void {
        if (this.amountOfSteps > this.actualStepIndex + 1) {
            this.actualStepIndex++;
            this.goToStep();
        }
    }

    previousStep(): void {
        if (this.actualStepIndex > 0) {
            this.actualStepIndex--;
            this.goToStep();
        }
    }

    goToStep(): void {
        this.step = this.instructions[0].steps[this.actualStepIndex];
        if (this.actualStepIndex + 1 == this.amountOfSteps)
            this.snackBarService.showSimple('Congratulations! That\'s the last step!')
    }

    getIngredientImage(path: string): string {
        return `https://spoonacular.com/cdn/ingredients_250x250/${path}`;
    }

    getEquipmentImage(path: string): string {
        return `https://spoonacular.com/cdn/equipment_250x250/${path}`;
    }

}
