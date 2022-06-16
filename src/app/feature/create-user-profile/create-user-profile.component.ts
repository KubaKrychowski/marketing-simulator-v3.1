import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.sass']
})
export class CreateUserProfileComponent implements OnInit {
  companyNameFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {


  }
}
