import { Component, Input } from '@angular/core';
import { ExtendedRecipe } from '~/app/model/extended-recipe';

@Component({
    selector: 'Recipe-Basic-Info',
    templateUrl: './recipe-basic-info.component.html'
})
export class RecipeBasicInfoComponent {
    @Input() recipe: ExtendedRecipe;

    constructor() {
    }
}
