import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
