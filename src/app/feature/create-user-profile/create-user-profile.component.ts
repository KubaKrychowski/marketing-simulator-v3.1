import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Loader } from "@googlemaps/js-api-loader";
import { ComapnyOnMap } from 'src/app/shared/models/company-on-map.model';
import { GeoCodingApiService } from 'src/app/services/geocoding-api/geocoding-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { UniqueNamesService } from 'src/app/services/unique-names/unique-names.service';

const companyMap: Record<string, ComapnyOnMap> = {
  company1: {
    center: {
      lat: 52.237049,
      lng: 21.017532
    },
    range: 10000
  }
}

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.sass'],
  providers: [GeoCodingApiService]
})
export class CreateUserProfileComponent implements OnInit {
  companyNameIsUnique = false;
  companyAdress = null;

  companyCreatorFormGroup = new FormGroup({
    companyName: new FormControl('', [Validators.required]),
    companyCountry: new FormControl('', [Validators.required]),
    companyCity: new FormControl('', [Validators.required]),
    companyStreet: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
  });

  constructor(
    private geoCodingApiService: GeoCodingApiService,
    public loaderService: LoaderService,
    private apiService: ApiService,
    private uniqueNamesService: UniqueNamesService,
    private router: Router) { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "",
      version: "weekly"
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        //TODO: Add center on user localization and create pin under this latlng
        center: {
          lat: 52.237049,
          lng: 21.017532
        },
        zoom: 6,
        styles: [

          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },

          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8ec3b9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1a3646"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#64779e"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6f9ba5"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3C7680"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#304a7d"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c6675"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#255763"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#b0d5ce"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }


        ]
      });

      const companyCircle = new google.maps.Circle({
        map: map,
        strokeColor: "#FF0000",
        strokeOpacity: 1,
        fillColor: "#FF0000",
        fillOpacity: 1,
        center: companyMap.company1.center,
        radius: 1000,
      })

      google.maps.event.addListener(map, 'zoom_changed', function () {
        var zoomLevel = map.getZoom();
        companyCircle.setRadius(getCustomRadiusForZoom(zoomLevel));
      });

      google.maps.event.addDomListener(map, 'click', (mapsMouseEvent: any) => {
        const latLng = mapsMouseEvent.latLng.toJSON();

        this.geoCodingApiService.getAdressByCoordinates(latLng.lat, latLng.lng).subscribe(res => {
          console.log(res.results[0]);
          const adress = res.results[0].formatted_address.split(',');
          this.companyAdress = adress;
          this.updateForm(adress[2], adress[1], adress[0]);
        });
      });
    });
  }

  checkIfCompanyNameIsAvailable() {
    const name = this.companyCreatorFormGroup.get('companyName').value;

    this.uniqueNamesService.checkIfCompanyNameIsAvailable(name).subscribe(res => {
      for (const [key, value] of Object.entries(res)) {
        if (value === 'Name is free') {
          this.companyNameIsUnique = true;
        } else {
          this.companyNameIsUnique = false;
        }
      }
    }, err => {
      console.log(err);
    })
  };

  updateForm(country: string, city: string, street: string) {
    this.companyCreatorFormGroup.get('companyCountry')?.setValue(country);
    this.companyCreatorFormGroup.get('companyCity')?.setValue(city);
    this.companyCreatorFormGroup.get('companyStreet')?.setValue(street);
  }

  sendForm() {
    this.apiService.sendPostRequest('Companies/create', this.companyCreatorFormGroup.value).subscribe(res => {
      this.router.navigate(['/start'])
    }, err => {
      console.log(err);
    })
  }
}

function getCustomRadiusForZoom(zoomLevel: number) {
  console.log(zoomLevel);
  if (zoomLevel >= 10) {
    return 1000 / (zoomLevel / 6);
  }
  else if (zoomLevel === 9) {
    return 3000;
  }
  else if (zoomLevel === 8) {
    return 5000;
  }
  else if (zoomLevel === 7) {
    return 12000;
  } else if (zoomLevel === 6) {
    return 20000;
  } else if (zoomLevel === 5) {
    return 60000
  } else if (zoomLevel === 4) {
    return 120000;
  } else if (zoomLevel === 3) {
    return 200000;
  } else if (zoomLevel === 2) {
    return 350000;
  } else if (zoomLevel <= 1) {
    return 500000;
  }
}



