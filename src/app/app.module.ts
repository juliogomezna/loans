import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FundamentalNgxCoreModule, ShellbarModule } from '@fundamental-ngx/core';
import { HomeViewComponent } from './home-view/home-view.component';
import { InfiniteScrollModule } from '@fundamental-ngx/core';
import { InputGroupModule } from '@fundamental-ngx/core';
import { LoanAmmountComponent } from './loan-view/loan-ammount/loan-ammount.component';
import { FormsModule } from '@angular/forms';
import { LoanViewComponent } from './loan-view/loan-view.component';
import { DatePickerModule } from '@fundamental-ngx/core';
import { BankInfoViewComponent } from './bank-info-view/bank-info-view.component';
import { TileModule } from '@fundamental-ngx/core';
import { LoanService } from './commons/services/loan.service';
import { UserApiService } from './commons/apis/Users.api';
import { BankApiService } from './commons/apis/Bank.api.service';
import { LoanListComponent } from './loan-view/loan-list/loan-list.component';
import { LoanDetailComponent } from './loan-view/loan-detail/loan-detail.component';
import { ListModule } from '@fundamental-ngx/core';
import { informComponent } from './loan-view/informs/inform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeViewComponent,
    LoanAmmountComponent,
    LoanViewComponent,
    BankInfoViewComponent,
    LoanListComponent,
    LoanDetailComponent,
    informComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FundamentalNgxCoreModule,
    ShellbarModule,
    InfiniteScrollModule,
    InputGroupModule,
    FormsModule,
    DatePickerModule,
    TileModule,
    HttpClientModule,
    ListModule,
  ],
  providers: [LoanService, UserApiService,BankApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
