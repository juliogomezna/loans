import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {

    //TODO: Turn into model
    conditions = {
        ammount: {
            min: 1,
            max: 100
        }
    };

    ammount: number;

    constructor(private router: Router) {}

    fulfillRequest() {
        this.router.navigate(['request'], { state: {preFillAmmount: this.ammount}
         });
    }

}
