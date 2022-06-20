import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-is-not-logged-in-alert',
  templateUrl: './user-is-not-logged-in-alert.component.html',
  styleUrls: ['./user-is-not-logged-in-alert.component.sass']
})
export class UserIsNotLoggedInAlertComponent implements OnInit {
  isAlertClosed = false;
  constructor() { }

  ngOnInit(): void {
  }
  closeAlert(){
    this.isAlertClosed = true;
  }
}
