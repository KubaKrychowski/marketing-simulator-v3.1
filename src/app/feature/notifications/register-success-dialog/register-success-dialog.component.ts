import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-success-dialog',
  templateUrl: './register-success-dialog.component.html',
  styleUrls: ['./register-success-dialog.component.sass']
})
export class RegisterSuccessDialogComponent {

  constructor(public dialogRef: MatDialogRef<RegisterSuccessDialogComponent>, private router: Router) { }

  goToCompanyProfileCreator(){
    this.router.navigate(['/start/create-user-profile']);
    this.dialogRef.close();
  }

  goToHomePage(){
    this.router.navigate(['']);
    this.dialogRef.close();
  }
}
