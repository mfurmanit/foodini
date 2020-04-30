import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { OwnRecipe } from '~/app/model/own-recipe';

var Sqlite = require('nativescript-sqlite');

export interface ObservableInt<T> {
    then(...any: any): void;
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private database: any;
    private favourites: any;
    private recipes: any;
    public favouritesFetched: Subject<boolean> = new Subject();
    public recipesFetched: Subject<boolean> = new Subject();

    public constructor() {
        // Sqlite.deleteDatabase("my.db");
        this.initializeData();
    }

    public getRecipes(): any {
        return this.recipes;
    }

    public getFavourites(): any {
        return this.favourites;
    }

    private initializeData(): void {
        (new Sqlite('my.db')).then(db => {
            this.database = db;
            this.initializeFavouritesTable();
            this.initializeRecipesTable();
        }, error => console.log(`Error occurred while opening database. Trace is ${error}`));
    }

    private initializeFavouritesTable(): void {
        this.database.execSQL('CREATE TABLE IF NOT EXISTS favourites (id INTEGER, title TEXT, image TEXT)').then(() => {
            console.log('Favourites table created successfully.');
            this.fetchFavourites();
        }, error => console.log(`Error occurred while creating favourites table. Trace is ${error}`));
    }

    private initializeRecipesTable(): void {
        this.database.execSQL('CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, summary TEXT,' +
            ' imageUrl TEXT, score INTEGER, servings INTEGER, readyInMinutes INTEGER)').then(() => {
            console.log('Recipes table created successfully.');
            this.fetchRecipes();
        }, error => console.log(`Error occurred while creating recipes table. Trace is ${error}`));
    }

    public insertRecipe(recipe: OwnRecipe) {
        this.database.execSQL(`INSERT INTO recipes (title, summary, imageUrl, score, servings, readyInMinutes) VALUES (?, ?, ?, ?, ?, ?)`,
            [recipe.title, recipe.summary, recipe.imageUrl, recipe.score, recipe.servings, recipe.readyInMinutes]).then(() => {
            console.log('Recipe row inserted successfully.');
            this.fetchRecipes();
        }, error => console.log(`Error occurred while inserting recipe row. Trace is ${error}`));
    }

    public fetchRecipes() {
        this.database.all('SELECT * FROM recipes').then(rows => {
            this.recipes = rows;
            this.recipesFetched.next(true);
            console.log(rows);
            console.log('Recipes fetched successfully.');
        }, error => console.log(`Error occurred while fetching recipes. Trace is ${error}`));
    }

    public getRecipe(id: number): ObservableInt<string[]> {
        return this.database.get('SELECT * FROM recipes WHERE id=?', [id]);
    }

    public insertFavourite(id: number, title: string, image: string) {
        this.database.execSQL(`INSERT INTO favourites (id, title, image) VALUES (?, ?, ?)`, [id, title, image]).then(() => {
            console.log('Favourite row inserted successfully.');
            this.fetchFavourites();
        }, error => console.log(`Error occurred while inserting favourites row. Trace is ${error}`));
    }

    public deleteFavourite(id: number) {
        this.database.execSQL(`DELETE FROM favourites WHERE id = ?`, [id]).then(() => {
            console.log('Favourite row deleted successfully.');
            this.fetchFavourites();
        }, error => console.log(`Error occurred while deleting favourites row. Trace is ${error}`));
    }

    public fetchFavourites() {
        this.database.all('SELECT * FROM favourites').then(rows => {
            this.favourites = rows;
            this.favouritesFetched.next(true);
            console.log(rows);
            console.log('Favourites fetched successfully.');
        }, error => console.log(`Error occurred while fetching favourites. Trace is ${error}`));
    }

    public checkFavourites(id: number): ObservableInt<string[]> {
        return this.database.get('SELECT * FROM favourites WHERE id=?', [id]);
    }

}
