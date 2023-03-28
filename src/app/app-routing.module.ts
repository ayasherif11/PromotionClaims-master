import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './components/claims/claims.component';
import { LoginComponent } from './components/login/login.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { ConditionTypesComponent } from './components/condition-types/condition-types.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ParametersComponent },
  { path: 'par', component: ParametersComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'conditionTypes', component: ConditionTypesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
