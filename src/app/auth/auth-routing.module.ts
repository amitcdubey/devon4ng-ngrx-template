import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/components/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

/* @export
 * @class AuthDataRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthDataRoutingModule {}
