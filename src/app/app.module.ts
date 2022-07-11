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
import { MarketModule } from './feature/market/market/market.module';
import { AdminPanelComponent } from './main-pages/admin-panel/admin-panel.component';
import { UsersManagementComponent } from './main-pages/admin-panel/users-management/users-management.component';
import { CompaniesManagementComponent } from './main-pages/admin-panel/companies-management/companies-management.component';
import { MarketManagementComponent } from './main-pages/admin-panel/market-management/market-management.component';
import { UsersManagementUserItemComponent, DialogOverviewExampleDialog } from './main-pages/admin-panel/users-management/users-management-user-item/users-management-user-item.component';
import { MarketProductItemComponent } from './main-pages/admin-panel/market-management/market-product-item/market-product-item.component';
import { AddProductCardComponent } from './main-pages/admin-panel/market-management/add-product-card/add-product-card.component';

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
    NotificationsModule,
    MarketModule
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
    AdminPanelComponent,
    UsersManagementComponent,
    CompaniesManagementComponent,
    MarketManagementComponent,
    UsersManagementUserItemComponent,
    DialogOverviewExampleDialog,
    MarketProductItemComponent,
    AddProductCardComponent
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
