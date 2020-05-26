import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BANK } from '../utils/constants';
import { FdDate, AlertService } from '@fundamental-ngx/core';
import { User } from '../commons/models/user.model';
import { Credit } from '../commons/models/credit.model';
import { LoanService } from '../commons/services/loan.service';
import { Router } from '@angular/router';
import { BankApiService } from '../commons/apis/Bank.api.service';

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
    bankInfo;

    constructor(private loanService: LoanService,
        public alertService: AlertService,
        private router: Router,
        private bankApi:BankApiService) {}

    ngOnInit() {
        this.initValues();
        this.bankApi.getBankInfo().subscribe(bank => {
            this.bankInfo= bank;
        })
    }

    initValues(){
        this.userModel = new User();
        this.userModel.credits = [];
        this.creditModel = new Credit();
        this.savingIndicator = false;
        this.bankInfo={};
    }

    onSubmit() {

        if(this.creditModel.value && this.userModel.dni){
            if(this.bankInfo.capital >= this.creditModel.value ){

            
            this.savingIndicator = true;
            this.creditModel.state="rechazado";
            this.userModel.credits.push(this.creditModel);

            this.loanService.saveUserCredit(this.userModel).subscribe(
                user => {
                    console.log(user);
                    this.savingIndicator = false;
                    const alertRef = this.alertService.open(this.template, {
                        type: 'warning',
                        duration: -1,
                        data: {
                            firstLine: 'El estado de tu credito:',
                            secondLine: `${user.credits[0].state} dirigete a solicitudes para mas detalle`
                        }
                    });
            
                    alertRef.afterDismissed.subscribe((data) => {
                        this.router.navigate(['requests']);
                    });
                    this.userModel.credits=[];
                },
                error => {
                    console.log('there is an error');
                    this.savingIndicator = false;
                }
            );
            }else{
                alert("el banco no cuenta con tal cantidad ingresa una cifra menor")
            }
        }else{
            alert("Por favor verifica los campos")
        }
    }

    openFromTemplate(): void {
        
    }
}
