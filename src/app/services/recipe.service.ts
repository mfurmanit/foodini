import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { ResponseModel } from '~/app/model/response-model';
import { Observable } from 'rxjs/internal/Observable';
import { SimpleRecipe } from '~/app/model/simple-recipe';
import { environment } from '~/assets/environment';
import { ExtendedRecipe } from '~/app/model/extended-recipe';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipe: ExtendedRecipe;
    recipeImageUrl: string = 'https://spoonacular.com/recipeImages/';

    constructor(private httpClient: HttpClient) {
    }

    getRecipes(query: string): Observable<any> {
        return this.httpClient.get<ResponseModel<SimpleRecipe>>(`${environment.apiUrl}/recipes/search?query=${query}&number=10`);
    }

    getRecipeDetails(id: string): Observable<any> {
        return this.httpClient.get<ResponseModel<ExtendedRecipe>>(`${environment.apiUrl}/recipes/${id}/information`);
    }

}
