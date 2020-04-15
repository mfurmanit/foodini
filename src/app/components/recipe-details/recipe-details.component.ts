import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'Recipe-Details',
    templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.id = id;
    }
}
