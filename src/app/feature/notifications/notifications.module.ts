import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterSuccessDialogComponent } from './register-success-dialog/register-success-dialog.component';
import { UserIsNotLoggedInAlertComponent } from './user-is-not-logged-in-alert/user-is-not-logged-in-alert.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RegisterSuccessDialogComponent,
    UserIsNotLoggedInAlertComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UserIsNotLoggedInAlertComponent]
})
export class NotificationsModule { }
