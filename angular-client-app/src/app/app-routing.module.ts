import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ColorsComponent }      from './colors/colors.component';
import { ColorDetailComponent }  from './color-detail/color-detail.component';
import { LogoutComponent }  from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:hexcode', component: ColorDetailComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'logout_success', component: LogoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
