import { SimpleRecipe } from '~/app/model/simple-recipe';

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
