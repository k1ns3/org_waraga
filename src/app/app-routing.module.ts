import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { LoginComponent } from './login/login.component';
import { ViewappComponent } from './viewapp/viewapp.component';
import { HomeComponent } from './home/home.component';

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'organaizer',
    component: ViewappComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  { path: 'login', component: LoginComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
