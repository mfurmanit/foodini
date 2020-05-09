import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '~/app/services/recipe.service';
import { SimpleRecipe } from '~/app/model/simple-recipe';
import { DatabaseService } from '~/app/services/database.service';
import { mapFavouriteToSimpleRecipe } from '~/app/others/utils';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'Recipes-Favourites-List',
    templateUrl: './recipes-favourites-list.component.html'
})
export class RecipesFavouritesListComponent implements OnInit, OnDestroy {
    recipes: SimpleRecipe[];
    subscription: Subscription = new Subscription();

    constructor(private recipeService: RecipeService,
                private databaseService: DatabaseService) {
    }

    ngOnInit(): void {
        this.subscription.add(
            this.databaseService.favouritesFetched
                .subscribe(initialized => initialized ? this.loadRecipes() : null)
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private loadRecipes(): void {
        this.recipes = [];
        this.databaseService.getFavourites()
            .forEach(favourite => this.recipes.push(mapFavouriteToSimpleRecipe(favourite)));
    }
}
