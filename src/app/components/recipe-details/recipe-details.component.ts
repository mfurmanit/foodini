import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '~/app/services/recipe.service';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
import { MockRecipe } from '~/app/model/mock-recipe';
import { RouterExtensions } from "nativescript-angular/router";
import { DatabaseService } from '~/app/services/database.service';
import { isNullOrUndefined } from '~/app/others/utils';
import { SnackBarService } from '~/app/services/snack-bar.service';

@Component({
    selector: 'Recipe-Details',
    templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
    id: number;
    recipe: ExtendedRecipe;
    showFavourites: boolean = true;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private database: DatabaseService,
                private snackBarService: SnackBarService,
                private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipe = MockRecipe as ExtendedRecipe;
        this.recipeService.recipe = this.recipe;
        // TODO uncomment on production (commented for better development flow)
        // this.id = +this.route.snapshot.params.id;
        // this.recipeService.getRecipeDetails(this.id.toString()).subscribe(data => {
        //     this.recipe = data as ExtendedRecipe;
        // });
        this.checkFavourites();
    }

    private checkFavourites(): void {
        // TODO fetch from this.id
        this.database.checkFavourites(503683).then(result => this.showFavourites = isNullOrUndefined(result));
    }

    onSummaryTap(): void {
        this.router.navigate(['recipe-summary']);
    }

    onInstructionsTap(): void {
        this.router.navigate(['recipe-instructions']);
    }

    onFavouritesTap(): void {
        this.database.insertFavourite(this.recipe.id);
        this.showFavourites = false;
        this.snackBarService.showSimple('Recipe has been added to favorites!')
    }
}
