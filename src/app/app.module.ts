import { DEFAULT_CURRENCY_CODE, LOCALE_ID, Component } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { CpfPipe } from './pipes/cpf.pipe';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandPageComponent } from './land-page/land-page.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CityComponent } from './city/city.component';
import { GravadoraComponent } from './gravadora/gravadora.component';
 import ptBr from '@angular/common/locales/pt';
 import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
  //  LoginComponent,
    UserComponent,
 //   TotalUsersComponent,

    CpfPipe,
    CityComponent,
    GravadoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}


