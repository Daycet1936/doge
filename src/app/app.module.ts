import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoinCapService } from './service/coincap.service';
import { MuchPriceComponent } from './component/much-price/much-price.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: MuchPriceComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, MuchPriceComponent, CoinCapService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
