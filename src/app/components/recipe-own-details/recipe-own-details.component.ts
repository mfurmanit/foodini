import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '~/app/services/recipe.service';
import { DatabaseService } from '~/app/services/database.service';
import { mapOwnRecipe } from '~/app/others/utils';
import { SnackBarService } from '~/app/services/snack-bar.service';
import { OwnRecipe } from '~/app/model/own-recipe';

@Component({
    selector: 'Recipe-Own-Details',
    templateUrl: './recipe-own-details.component.html'
})
export class RecipeOwnDetailsComponent implements OnInit {
    id: number;
    recipe: OwnRecipe;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private database: DatabaseService,
                private snackBarService: SnackBarService,
                private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.id = +this.route.snapshot.params.id;
        this.database.getRecipe(this.id).then(data => {
            this.recipe = mapOwnRecipe(data);
            this.recipeService.recipe = this.recipe;
        });
    }

    onSummaryTap(): void {
        this.router.navigate(['recipe-summary']);
    }

}
