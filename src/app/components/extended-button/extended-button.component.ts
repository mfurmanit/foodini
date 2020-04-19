import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from '~/app/others/utils';

@Component({
    selector: 'Extended-Button',
    templateUrl: './extended-button.component.html'
})
export class ExtendedButtonComponent implements OnInit {
    @Input() icon: string;
    @Input() text: string;
    @Input() labelClasses: string[];
    @Input() buttonClasses: string[];
    @Output() onTap = new EventEmitter();
    labelClass: string = 'mdi';
    buttonClass: string = 'extended-button';

    constructor() {
    }

    ngOnInit(): void {
        this.applyClasses();
    }

    private applyClasses(): void {
        if (!isNullOrUndefined(this.labelClasses))
            this.labelClasses.forEach(clazz => this.labelClass += ` ${clazz}`);

        if (!isNullOrUndefined(this.buttonClasses))
            this.buttonClasses.forEach(clazz => this.buttonClass += ` ${clazz}`);
    }
}
