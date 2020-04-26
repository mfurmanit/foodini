import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '~/app/others/utils';

@Component({
    selector: 'Background-Label',
    templateUrl: './background-label.component.html'
})
export class BackgroundLabelComponent implements OnInit {
    @Input() icon: string;
    @Input() text: string;
    @Input() labelClasses: string[];
    @Input() iconClasses: string[];
    labelClass: string = 'text-center opacity-medium v-align-middle-label fs-40';
    iconClass: string = 'mdi text-center opacity-medium v-align-middle-label fs-100';

    constructor() {
    }

    ngOnInit(): void {
        this.applyClasses();
    }

    private applyClasses(): void {
        if (!isNullOrUndefined(this.labelClasses))
            this.labelClasses.forEach(clazz => this.labelClass += ` ${clazz}`);

        if (!isNullOrUndefined(this.iconClasses))
            this.iconClasses.forEach(clazz => this.iconClass += ` ${clazz}`);
    }
}
