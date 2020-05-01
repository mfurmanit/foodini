import { Component } from '@angular/core';
import { OwnRecipe } from '~/app/model/own-recipe';
import { DatabaseService } from '~/app/services/database.service';
import { SnackBarService } from '~/app/services/snack-bar.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'Recipe-Add',
    templateUrl: './recipe-add.component.html'
})
export class RecipeAddComponent {
    recipe: OwnRecipe = OwnRecipe.default();
    ready: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor(private databaseService: DatabaseService,
                private routerExtensions: RouterExtensions,
                private snackBarService: SnackBarService) {
    }

    saveRecipe(): void {
        this.databaseService.insertRecipe(this.recipe);
        this.snackBarService.showSimple('Recipe added successfully! Yay!');
        this.routerExtensions.back();
    }
}
