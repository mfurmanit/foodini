import { Injectable } from '@angular/core';
import { SnackBar } from 'nativescript-material-snackbar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    snackbar = new SnackBar();

    constructor() {
    }

    showSimple(message: string): any {
        const snackBar = new SnackBar();
        snackBar.simple(message);
    }

    showAction(message: string, actionText: string, delay: number = 2000): any {
        this.snackbar
            .action({
                message: message,
                actionText: actionText,
                hideDelay: delay
            });
    }

}
