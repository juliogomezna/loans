import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-loan-ammount',
    templateUrl: './loan-ammount.component.html',
    styleUrls: ['loan-ammount.component.scss']
})
export class LoanAmmountComponent {

    @Input()
    conditions: any;

    @Input()
    ammount: number;

    @Output()
    ammountEntered = new EventEmitter<number>();

    ammountRequested;
    prevAmmount: number;

    dirty=false


    validate() {
        this.ammountRequested > this.conditions.ammount.max
            || this.ammountRequested < this.conditions.ammount.min
            ? this.dirty=true : this.dirty= false

        this.dirty? this.ammountEntered.emit(null): this.ammountEntered.emit(this.ammountRequested)
    }

}
