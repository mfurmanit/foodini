import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '~/app/services/recipe.service';
import { SimpleRecipe } from '~/app/model/simple-recipe';
import { DatabaseService } from '~/app/services/database.service';
import { mapFavouriteToSimpleRecipe, mapOwnRecipe } from '~/app/others/utils';
import { Subscription } from 'rxjs/internal/Subscription';
import { OwnRecipe } from '~/app/model/own-recipe';
import { Router } from '@angular/router';

@Component({
    selector: 'Recipes-Own-List',
    templateUrl: './recipes-own-list.component.html'
})
export class RecipesOwnListComponent implements OnInit, OnDestroy {
    recipes: OwnRecipe[];
    subscription: Subscription = new Subscription();

    constructor(private recipeService: RecipeService,
                private router: Router,
                private databaseService: DatabaseService) {
    }

    ngOnInit(): void {
        this.subscription.add(
            this.databaseService.recipesFetched
                .subscribe(initialized => initialized ? this.loadRecipes() : null)
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    loadRecipes(): void {
        this.recipes = [];
        this.databaseService.getRecipes()
            .forEach(recipe => this.recipes.push(mapOwnRecipe(recipe)));
    }

    addRecipe() {
        this.router.navigate(['recipe-add']);
    }
}
