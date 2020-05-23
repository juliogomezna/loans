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
import { LoanAmmountComponent } from './loan-ammount/loan-ammount.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeViewComponent,
    LoanAmmountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FundamentalNgxCoreModule,
    ShellbarModule,
    InfiniteScrollModule,
    InputGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
