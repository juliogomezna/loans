import { Component, OnInit } from '@angular/core';
import { BANK } from '../utils/constants';
import { FdDate } from '@fundamental-ngx/core';

@Component({
    selector: 'app-loan-view',
    templateUrl: './loan-view.component.html',
    styleUrls: ['loan-view.component.scss']
})
export class LoanViewComponent implements OnInit {

    conditions = {
        ammount: {
            min: 1,
            max: 100
        }
    };
    ammount: number;
    date = FdDate.getToday();

    ngOnInit() {
        console.log(window.history.state.preFillAmmount);
    }

    onSubmit() {
    }
}
