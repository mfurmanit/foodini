import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'App-Search-Bar',
    templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

    @Output() onClearTap: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSubmitTap: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }
}
