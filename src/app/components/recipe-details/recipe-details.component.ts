import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '~/app/services/recipe.service';
import { ExtendedRecipe } from '~/app/model/extended-recipe';

@Component({
    selector: 'Recipe-Details',
    templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
    id: number;
    recipe: ExtendedRecipe;

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        // this.recipe = MockRecipe as ExtendedRecipe;
        const id = +this.route.snapshot.params.id;
        this.id = id;
        this.recipeService.getRecipeDetails(id.toString()).subscribe(data => {
            this.recipe = data as ExtendedRecipe;
        });
    }

    onSummaryTap(): void {
        alert('Summary tapped');
    }

    onInstructionsTap(): void {
        alert('Instructions tapped');
    }
}
