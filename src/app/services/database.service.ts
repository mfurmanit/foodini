import { Injectable } from '@angular/core';

var Sqlite = require('nativescript-sqlite');

export interface ObservableInt<T> {
    then(...any: any): void;
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private database: any;
    public favourites: string[][];

    public constructor() {
        // Sqlite.deleteDatabase("my.db");
        this.initializeData();
    }

    private initializeData(): void {
        (new Sqlite('my.db')).then(db => {
            this.database = db;
            this.initializeFavouritesTable();
            this.initializeRecipesTable();
        }, error => console.log(`Error occurred while opening database. Trace is ${error}`));
    }

    private initializeFavouritesTable(): void {
        this.database.execSQL('CREATE TABLE IF NOT EXISTS favourites (id TEXT)').then(() => {
            console.log('Favourites table created successfully.');
            this.fetchFavourites();
        }, error => console.log(`Error occurred while creating favourites table. Trace is ${error}`));
    }

    private initializeRecipesTable(): void {
        this.database.execSQL('CREATE TABLE IF NOT EXISTS recipes (id TEXT)').then(() => {
            console.log('Favourites table created successfully.');
        }, error => console.log(`Error occurred while creating favourites table. Trace is ${error}`));
    }

    public insertFavourite(id: number) {
        this.database.execSQL(`INSERT INTO favourites (id) VALUES (?)`, [id.toString()]).then(() => {
            console.log('Favourite row inserted successfully.');
            this.fetchFavourites();
        }, error => console.log(`Error occurred while inserting favourites row. Trace is ${error}`));
    }

    public fetchFavourites() {
        this.database.all('SELECT * FROM favourites').then(rows => {
            this.favourites = rows;
            console.log('Favourites fetched successfully.');
        }, error => console.log(`Error occurred while fetching favourites. Trace is ${error}`));
    }

    public checkFavourites(id: number): ObservableInt<string[]> {
        return this.database.get('SELECT * FROM favourites WHERE id=?', [id.toString()]);
    }

}
