import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

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

  ngOnInit(): void {
    for (const [key, value] of Object.entries(this.data)) {
      this.user = value;
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updateUserDate() {

  }
}