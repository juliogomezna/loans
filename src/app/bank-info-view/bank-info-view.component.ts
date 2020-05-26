import { Component, OnInit, Input } from "@angular/core";
import { BANK } from '../utils/constants';
import { BankApiService } from '../commons/apis/Bank.api.service';

@Component({
    selector: 'app-bank-info-view',
    templateUrl: './bank-info-view.component.html',
    styleUrls: ['./bank-info-view.component.scss']
})
export class BankInfoViewComponent implements OnInit{
    
    @Input()
    bankInfo: any;

    constructor() {
    }

    ngOnInit(){
        
    }
}
