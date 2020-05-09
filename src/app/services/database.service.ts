import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { OwnRecipe } from '~/app/model/own-recipe';
import { LogService } from '~/app/services/log.service';
import { DbObservable } from '~/app/model/db-observable';

const Sqlite = require('nativescript-sqlite');

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private database: any;
    private favourites: any;
    private recipes: any;
    public favouritesFetched: Subject<boolean> = new Subject();
    public recipesFetched: Subject<boolean> = new Subject();

    constructor(private logService: LogService) {
        // Sqlite.deleteDatabase("foodini.database");
        this.initializeData();
    }

    public getRecipes(): any {
        return this.recipes;
    }

    public getFavourites(): any {
        return this.favourites;
    }

    private initializeData(): void {
        (new Sqlite('foodini.database')).then(db => {
            this.database = db;
            this.initializeFavouritesTable();
            this.initializeRecipesTable();
        }, error => this.logService.error(`Error occurred while opening database. Trace is ${error}`));
    }

    private initializeFavouritesTable(): void {
        this.database.execSQL('CREATE TABLE IF NOT EXISTS favourites (id INTEGER, title TEXT, image TEXT)').then(() => {
            this.logService.log('Favourites table created successfully.');
            this.fetchFavourites();
        }, error => this.logService.error(`Error occurred while creating favourites table. Trace is ${error}`));
    }

    private initializeRecipesTable(): void {
        this.database.execSQL('CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, summary TEXT,' +
            ' image TEXT, score INTEGER, servings INTEGER, readyInMinutes INTEGER)').then(() => {
            this.logService.log('Recipes table created successfully.');
            this.fetchRecipes();
        }, error => this.logService.error(`Error occurred while creating recipes table. Trace is ${error}`));
    }

    public insertRecipe(recipe: OwnRecipe) {
        this.database.execSQL(`INSERT INTO recipes (title, summary, image, score, servings, readyInMinutes) VALUES (?, ?, ?, ?, ?, ?)`,
            [recipe.title, recipe.summary, recipe.image, recipe.score, recipe.servings, recipe.readyInMinutes]).then(() => {
            this.logService.log('Recipe row inserted successfully.');
            this.fetchRecipes();
        }, error => this.logService.error(`Error occurred while inserting recipe row. Trace is ${error}`));
    }

    public fetchRecipes() {
        this.database.all('SELECT * FROM recipes').then(rows => {
            this.recipes = rows;
            this.recipesFetched.next(true);
            this.logService.log('Recipes fetched successfully.');
        }, error => this.logService.error(`Error occurred while fetching recipes. Trace is ${error}`));
    }

    public getRecipe(id: number): DbObservable<string[]> {
        return this.database.get('SELECT * FROM recipes WHERE id=?', [id]);
    }

    public insertFavourite(id: number, title: string, image: string) {
        this.database.execSQL(`INSERT INTO favourites (id, title, image) VALUES (?, ?, ?)`, [id, title, image]).then(() => {
            this.logService.log('Favourite row inserted successfully.');
            this.fetchFavourites();
        }, error => this.logService.error(`Error occurred while inserting favourites row. Trace is ${error}`));
    }

    public deleteFavourite(id: number) {
        this.database.execSQL(`DELETE FROM favourites WHERE id = ?`, [id]).then(() => {
            this.logService.log('Favourite row deleted successfully.');
            this.fetchFavourites();
        }, error => this.logService.error(`Error occurred while deleting favourites row. Trace is ${error}`));
    }

    public fetchFavourites() {
        this.database.all('SELECT * FROM favourites').then(rows => {
            this.favourites = rows;
            this.favouritesFetched.next(true);
            this.logService.log('Favourites fetched successfully.');
        }, error => this.logService.error(`Error occurred while fetching favourites. Trace is ${error}`));
    }

    public checkFavourites(id: number): DbObservable<string[]> {
        return this.database.get('SELECT * FROM favourites WHERE id=?', [id]);
    }

}
