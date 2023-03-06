import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './components/claims/claims.component';
import { ConditionTypeComponent } from './components/condition-type/condition-type.component';
import { LoginComponent } from './components/login/login.component';
import { ParametersComponent } from './components/parameters/parameters.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', component: ParametersComponent },
  { path: 'par', component: ParametersComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'conditionTypes', component: ConditionTypeComponent },


  // { path: '**', component: AppComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
