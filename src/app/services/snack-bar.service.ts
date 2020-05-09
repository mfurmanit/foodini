import { Injectable } from '@angular/core';
import { SnackBar } from 'nativescript-material-snackbar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor() {
    }

    showSimple(message: string): any {
        const snackBar = new SnackBar();
        snackBar.simple(message);
    }

}
