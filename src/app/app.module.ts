import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { ConditionTypeComponent } from './components/condition-type/condition-type.component';
import { ClaimsComponent } from './components/claims/claims.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ParametersComponent,
    ConditionTypeComponent,
    ClaimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
