import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path: '', component: SecretComponent, canActivate: [AuthGuard], },
    { path: 'login',component: LoginComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
