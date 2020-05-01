import { Component, Input } from '@angular/core';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
import { OwnRecipe } from '~/app/model/own-recipe';

@Component({
    selector: 'Recipe-Basic-Info',
    templateUrl: './recipe-basic-info.component.html'
})
export class RecipeBasicInfoComponent {
    @Input() recipe: ExtendedRecipe | OwnRecipe;

    constructor() {
    }
}
