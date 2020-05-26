import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BANK } from '../utils/constants';
import { FdDate, AlertService } from '@fundamental-ngx/core';
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
            min: 1000,
            max: 100000
        }
    };

    @ViewChild('template') template: TemplateRef<any>;

    ammount: number;
    date = FdDate.getToday();

    userModel: User;
    creditModel: Credit;
    savingIndicator: boolean;

    constructor(private loanService: LoanService, public alertService: AlertService) {}

    ngOnInit() {
        console.log(window.history.state.preFillAmmount);
        this.userModel = new User();
        this.userModel.credits = [];
        this.creditModel = new Credit();
        this.savingIndicator = false;

        this.loanService.getAllCredits().subscribe(users => {
            console.log('fetch ffrom server');
            console.log(users);
        });
    }

    onSubmit() {
        this.savingIndicator = true;
        this.creditModel.state="rechazado";
        this.userModel.credits.push(this.creditModel);
        this.loanService.saveUserCredit(this.userModel).subscribe(
            user => {
                console.log(user);
                /*this.savingIndicator = false;
                const alertRef = this.alertService.open(this.template, {
                    type: 'success',
                    duration: -1,
                    data: {
                        firstLine: 'El credito ha sido aprobado satisfactoriamente, dirigete a tu cuenta para gestionarlo',
                    }
                });
        
                alertRef.afterDismissed.subscribe((data) => {
                    
                });*/
            },
            error => {
                console.log('there is an error');
                this.savingIndicator = false;
            }
        );
    }

    openFromTemplate(): void {
        
    }
}
