import { MarketComponent } from './feature/market/components/market/market.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { StartComponent } from './main-pages/start/start.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { LogOutComponent } from './auth/log-out/log-out.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateUserProfileComponent } from './feature/create-user-profile/create-user-profile.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'start', component: StartComponent },
  { path: 'auth/log-in', component: LogInComponent },
  { path: 'auth/log-out', component: LogOutComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'start/create-user-profile', component: CreateUserProfileComponent },
  { path: 'market/results', component: MarketComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
