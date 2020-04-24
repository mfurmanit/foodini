import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { ResponseModel } from '~/app/model/response-model';
import { Observable } from 'rxjs/internal/Observable';
import { SimpleRecipe } from '~/app/model/simple-recipe';
import { environment } from '~/assets/environment';
import { ExtendedRecipe } from '~/app/model/extended-recipe';

var Sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private database: any;
    public people: Array<any>;
    public favourites: any;

    initializeFavourites(): void {
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS favourites (id TEXT)").then(id => {
                this.database = db;
                console.log(id);
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public insertFavourite(id: number) {
        this.database.execSQL(`INSERT INTO favourites (id) VALUES (?)`, [id.toString()]).then(id2 => {
            console.log("INSERT RESULT", id2);
            // this.fetch();
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    public getFavourites() {
        this.database.all("SELECT * FROM favourites").then(rows => {
            this.favourites = rows;
            console.log(rows);
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    public constructor() {
        this.people = [];
        this.initializeFavourites();
        // (new Sqlite("my.db")).then(db => {
        //     console.log(Sqlite.exists("my.db"));
        //     console.log(db);
        //     db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
        //         this.database = db;
        //         console.log(id);
        //     }, error => {
        //         console.log("CREATE TABLE ERROR", error);
        //     });
        // }, error => {
        //     console.log("OPEN DB ERROR", error);
        // });
    }

    public insert() {
        this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then(id => {
            console.log("INSERT RESULT", id);
            this.fetch();
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    public fetch() {
        this.database.all("SELECT * FROM people").then(rows => {
            this.people = [];
            for(var row in rows) {
                this.people.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }


}
