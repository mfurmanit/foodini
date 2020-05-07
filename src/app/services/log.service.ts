import { Injectable } from '@angular/core';
import { environment } from '~/assets/environment';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    constructor() {
    }

    log(message: string): void {
        if (!environment.production) {
            console.log(message);
        }
    }

    error(message: string): void {
        if (!environment.production) {
            console.error(message);
        }
    }

}
