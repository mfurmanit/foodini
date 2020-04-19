import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '~/app/others/utils';

@Component({
    selector: 'Extended-Label',
    templateUrl: './extended-label.component.html'
})
export class ExtendedLabelComponent implements OnInit {
    @Input() icon: string;
    @Input() text: string;
    @Input() classes: string[];
    clazz: string = 'mdi p-r-10';

    constructor() {
    }

    ngOnInit(): void {
        this.applyClasses();
    }

    private applyClasses(): void {
        if (!isNullOrUndefined(this.classes))
            this.classes.forEach(clazz => this.clazz += ` ${clazz}`);
    }
}
