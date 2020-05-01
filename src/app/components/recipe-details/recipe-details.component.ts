import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '~/app/services/recipe.service';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
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
    isFavourite: boolean = true;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private database: DatabaseService,
                private snackBarService: SnackBarService,
                private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.id = +this.route.snapshot.params.id;
        this.recipeService.getRecipeDetails(this.id.toString()).subscribe(data => {
            this.recipe = data as ExtendedRecipe;
            this.recipeService.recipe = this.recipe;
            console.log(this.recipe.image);
        });
        this.checkFavourites();
    }

    private checkFavourites(): void {
        this.database.checkFavourites(this.id).then(result => this.isFavourite = !isNullOrUndefined(result));
    }

    onSummaryTap(): void {
        this.router.navigate(['recipe-summary']);
    }

    onInstructionsTap(): void {
        this.router.navigate(['recipe-instructions']);
    }

    onFavouritesTap(): void {
        if (this.isFavourite) {
            this.database.deleteFavourite(this.recipe.id);
            this.isFavourite = false;
            this.snackBarService.showSimple('Recipe has been deleted from favorites!');
        } else {
            this.database.insertFavourite(this.recipe.id, this.recipe.title, this.recipe.image);
            this.isFavourite = true;
            this.snackBarService.showSimple('Recipe has been added to favorites!');
        }
    }
}
