import { UserService } from './../../services/user/user.service';
import { ApiService } from '../../services/api/api.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../../services/loader/loader.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent {
  submitedPasswordIsWrong = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    public loaderService: LoaderService,
    private router: Router) { }

  sendForm() {
    const userDto = {
      Email: this.emailFormControl.value,
      Password: this.passwordFormControl.value,
    };

    this.apiService.sendLoginData('Auth/login', userDto)
      .subscribe((res) => {
        for (const [key, value] of Object.entries(res)) {
          if (key === "token") {
            this.apiService.setApiToken(value);
            this.userService.initializeUser('kkrychowski@interia.pl');
            this.router.navigate(['/start']);
          }
        }
      }, err => {
        this.resetForm();
      });
  }

  private resetForm() {
    this.emailFormControl.reset();
    this.passwordFormControl.reset();
  }
}
