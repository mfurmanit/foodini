export class OwnRecipe {
    id: number;
    title: string;
    summary: string;
    image: string;
    score: number;
    servings: number;
    readyInMinutes: number;

    static default(): OwnRecipe {
        const recipe = new OwnRecipe();
        recipe.title = 'My own recipe title';
        recipe.summary = 'Place summary, description and information about ingredients right here.';
        recipe.image = 'https://';
        recipe.score = 1;
        recipe.servings = 1;
        recipe.readyInMinutes = 1;
        return recipe;
    }
}
