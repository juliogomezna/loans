import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { FundamentalNgxCoreModule, ShellbarModule } from '@fundamental-ngx/core';
import { HomeViewComponent } from './home-view/home-view.component';
import { InfiniteScrollModule } from '@fundamental-ngx/core';
import { InputGroupModule } from '@fundamental-ngx/core';
import { LoanAmmountComponent } from './loan-view/loan-ammount/loan-ammount.component';
import { FormsModule } from '@angular/forms';
import { LoanViewComponent } from './loan-view/loan-view.component';
import { DatePickerModule } from '@fundamental-ngx/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeViewComponent,
    LoanAmmountComponent,
    LoanViewComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
