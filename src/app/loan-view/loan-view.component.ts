import { Component, OnInit } from '@angular/core';
import { BANK } from '../utils/constants';
import { FdDate } from '@fundamental-ngx/core';
import { User } from '../commons/models/user.model';
import { Credit } from '../commons/models/credit.model';
import { LoanService } from '../commons/services/loan.service';

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

    userModel: User;
    creditModel: Credit;

    constructor(private loanService: LoanService) {}

    ngOnInit() {
        console.log(window.history.state.preFillAmmount);
        this.userModel = new User();
        this.creditModel = new Credit();

        this.loanService.getAllCredits().subscribe(users => {
            console.log(users);
        });
    }

    onSubmit() {
        console.log(this.userModel);
        console.log(this.creditModel);
    }
}
