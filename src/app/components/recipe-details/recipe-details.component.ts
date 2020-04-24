import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '~/app/services/recipe.service';
import { ExtendedRecipe } from '~/app/model/extended-recipe';
import { MockRecipe } from '~/app/model/mock-recipe';
import { RouterExtensions } from "nativescript-angular/router";
import { DatabaseService } from '~/app/services/database.service';

@Component({
    selector: 'Recipe-Details',
    templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
    id: number;
    recipe: ExtendedRecipe;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private database: DatabaseService,
                private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipe = MockRecipe as ExtendedRecipe;
        this.recipeService.recipe = this.recipe;
        // const id = +this.route.snapshot.params.id;
        // this.id = id;
        // this.recipeService.getRecipeDetails(id.toString()).subscribe(data => {
        //     this.recipe = data as ExtendedRecipe;
        // });
        // this.database.insert();
        console.log("test");
        // this.database.insert();
        // console.log(this.database.people);

    }

    onSummaryTap(): void {
        this.router.navigate(['recipe-summary']);
    }

    onInstructionsTap(): void {
        this.router.navigate(['recipe-instructions']);
    }

    onFavouritesTap(): void {
        // this.database.insertFavourite(this.recipe.id);
        // console.log("INSERTED");
        this.database.getFavourites();
    }
}
