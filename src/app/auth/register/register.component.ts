import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/shared/models/user.model';
import { LoaderService } from '../../services/loader/loader.service';
import { UniqueNamesService } from 'src/app/services/unique-names/unique-names.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterSuccessDialogComponent } from 'src/app/feature/notifications/register-success-dialog/register-success-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  picker: string | null = null;
  formIsSubmited: boolean = false;
  isEmailUnique: boolean = true;
  emailConfirmed: boolean = false;
  passwordConfirmed: boolean = false;

  public userRegisterForm!: FormGroup;

  constructor(
    public loaderService: LoaderService,
    public dialog: MatDialog,
    private apiService: ApiService,
    private uniqueNamesService: UniqueNamesService,
    private router: Router) {
    this.userRegisterForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      confirmEmail: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl(null, [Validators.minLength(8), Validators.required]),
      username: new FormControl(null, [Validators.minLength(4), Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
    });
  }

  emailMatchValidator(): boolean {
    return this
      .userRegisterForm
      .get('email')?.value === this.userRegisterForm.get('confirmEmail')?.value ? true : false;
  }

  passwordMatchValidator(): boolean {
    return this
      .userRegisterForm
      .get('password')?.value === this.userRegisterForm.get('confirmPassword')?.value ? true : false;
  }

  sendForm() {
    const userDto: User = {
      username: this.userRegisterForm.value.username,
      password: this.userRegisterForm.value.password,
      email: this.userRegisterForm.value.email,
      birthDate: this.userRegisterForm.controls['birthdate'].value
    };

    this.apiService.sendRegisterData('Auth/register', userDto).subscribe(res => {
      this.formIsSubmited = true;
    }, err => {
      console.log(err);
    });

    this.openDialog();
  }

  checkIfEmailIsAvailable() {
    this.uniqueNamesService.checkIfEmailIsAvailable(this.userRegisterForm.value.email).subscribe(res => {
      for (const [key, value] of Object.entries(res)) {
        if (value === 'Account already exist') {
          this.isEmailUnique = false;
        } else {
          this.isEmailUnique = true;
        }
      }
    }, err => {
      console.log(err);
    })
  };

  goToLoginPage() {
    this.router.navigate(['/auth/log-in']);
  }

  openDialog(): void {
    this.dialog.open(RegisterSuccessDialogComponent, {
      width: '50vw',
      height: '50vh',
    });
  }
}
