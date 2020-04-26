import { SimpleRecipe } from '~/app/model/simple-recipe';
import { OwnRecipe } from '~/app/model/own-recipe';

export function isNullOrUndefined(value: any) {
    return value === null || value === undefined;
}

export function mapFavouriteToSimpleRecipe(favouriteRecipe: string[]) {
    const recipe = new SimpleRecipe();
    recipe.id = Number(favouriteRecipe[0]);
    recipe.title = favouriteRecipe[1];
    recipe.image = favouriteRecipe[2];
    return recipe;
}

export function mapOwnRecipe(ownRecipe: string[]) {
    const recipe = new OwnRecipe();
    console.log(ownRecipe);
    recipe.id = Number(ownRecipe[0]);
    recipe.title = ownRecipe[1];
    recipe.summary = ownRecipe[2];
    recipe.imageUrl = ownRecipe[3];
    recipe.score = Number(ownRecipe[4]);
    recipe.servings = Number(ownRecipe[5]);
    recipe.readyInMinutes = Number(ownRecipe[6]);
    return recipe;
}
