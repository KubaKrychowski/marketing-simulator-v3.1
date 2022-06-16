import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.sass']
})
export class CreateUserProfileComponent implements OnInit {
  companyNameFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "AIzaSyCYqXihdiQaWiw7BIgvpdu4seFMGGJz_Qw",
      version: "weekly"
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map'),{
        center: {
          lat:  52.237049,
          lng: 21.017532
        },
        zoom: 6
      });
    });
  }

  ngAfterViewInit(): void {


  }
}
