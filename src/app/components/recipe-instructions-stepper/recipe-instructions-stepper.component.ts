import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'Recipe-Instructions-Stepper',
    templateUrl: './recipe-instructions-stepper.component.html'
})
export class RecipeInstructionsStepperComponent {
    @Input() step: number = 1;
    @Input() steps: number = 1;
    @Output() onPreviousTap: EventEmitter<any> = new EventEmitter<any>();
    @Output() onNextTap: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }
}
