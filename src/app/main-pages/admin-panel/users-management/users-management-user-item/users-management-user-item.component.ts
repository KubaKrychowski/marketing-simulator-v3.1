import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-management-user-item',
  templateUrl: './users-management-user-item.component.html',
  styleUrls: ['./users-management-user-item.component.sass'],
})
export class UsersManagementUserItemComponent implements OnInit {
  @Input() user: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openUserInformationsDialog(): void {
    if (this.user) {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '750px',
        data: {
          dataKey: this.user,
        },
      });
    } else {
      console.log('there is no user to show');
    }
  }
}

@Component({
  selector: 'users-management-user-item-dialog',
  templateUrl: 'user-management-user-item.dialog.html',
  styleUrls: ['./users-management-user-item.component.sass'],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editMode: boolean = false;
  user: any = null;

  newUsername = new FormControl(null, [
    Validators.minLength(4),
    Validators.required,
  ]);
  newExternalId = new FormControl(null, Validators.required);
  newEmail = new FormControl(null, [Validators.email, Validators.required]);
  newBalance = new FormControl(null, [Validators.required]);

  ngOnInit(): void {
    for (const [key, value] of Object.entries(this.data)) {
      this.user = value;
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updateUserData() {
    //TODO: End this feature
    if(this.newExternalId.valid && this.newEmail.valid && this.newBalance.valid){
      const userDto: User = {
        externalId: this.newExternalId.value,
        email: this.newEmail.value,
        money: this.newBalance.value
      }
      this.userService.updateUserData(userDto);
    }
  }
}
