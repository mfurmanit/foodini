import { Component, Input } from '@angular/core';

@Component({
    selector: 'Recipe-Instructions-Stepper',
    templateUrl: './recipe-instructions-stepper.component.html'
})
export class RecipeInstructionsStepperComponent {
    @Input() step: number = 1;

    constructor() {
    }
}
