import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'Recipes-Home',
    templateUrl: './recipes-home.component.html'
})
export class RecipesHomeComponent {

    constructor(private router: Router) {
    }

}
