import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-loan-ammount',
    templateUrl: './loan-ammount.component.html',
    styleUrls: ['loan-ammount.component.scss']
})
export class LoanAmmountComponent {

    // TODO: adapt to the model
    // TODO: Create a validator for this.
    @Input()
    conditions: any;

    @Input()
    ammount: number;

    @Output()
    ammountEntered = new EventEmitter<number>();

    ammountRequested;
    prevAmmount: number;

    validate() {
        this.ammountRequested > this.conditions.ammount.max
            || this.ammountRequested < this.conditions.ammount.min
            ? this.ammountRequested = this.prevAmmount : this.prevAmmount = this.ammountRequested;

        this.ammountEntered.emit(this.ammountRequested);
    }

}
