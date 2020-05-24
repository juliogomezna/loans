import { Component } from "@angular/core";
import { BANK } from '../utils/constants';

@Component({
    selector: 'app-bank-info-view',
    templateUrl: './bank-info-view.component.html',
    styleUrls: ['./bank-info-view.component.scss']
})
export class BankInfoViewComponent {
    bankInfo: any;
    constructor() {
        this.bankInfo = BANK;
    }
}
