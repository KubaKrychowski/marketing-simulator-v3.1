import { ApiService } from './services/api/api.service';
import { UserService } from './services/user/user.service';
import { ChartsService } from './services/charts/charts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { StartComponent } from './main-pages/start/start.component';
import { ChartsModule } from './shared/charts/charts/charts.module';
import { LogInComponent } from './auth/log-in/log-in.component';
import { LogOutComponent } from './auth/log-out/log-out.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateUserProfileComponent } from './feature/create-user-profile/create-user-profile.component';
import { LoaderService } from './services/loader/loader.service';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsModule } from './feature/notifications/notifications.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotificationsModule
  ],

  declarations: [
    AppComponent,
    HomePageComponent,
    StartComponent,
    LogInComponent,
    LogOutComponent,
    RegisterComponent,
    CreateUserProfileComponent,
    NavBarComponent,
  ],

  bootstrap: [AppComponent],
  providers: [UserService, ApiService, ChartsService, LoaderService,{
    provide:
        HTTP_INTERCEPTORS,
        useClass:
        InterceptorService,
        multi: true},
  ]
})
export class AppModule { }
