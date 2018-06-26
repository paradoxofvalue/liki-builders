import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { BuildingComplex } from '../building-complex';
import { ChangeDetectorRef } from '@angular/core';
import { } from '@types/googlemaps';
import { GoogleResult } from './google-result';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private http: RequestService, private cd: ChangeDetectorRef) { }

  buildingComplex: BuildingComplex = {
    administrativeAreaLevel1: null,
    administrativeAreaLevel2: null,
    administrativeAreaLevel3: null,
    country: null,
    lat: null,
    lng: null,
    locality: null,
    route: null,
    streetNumber: null,
    sublocalityLevel1: null,
    buildingComplex: {
      buildingComplexId: null,
      buildingBlocks: [],
      address: null,
      constructionEnd: null,
      constructionStart: null,
      description: null,
      maxPrice: {
        currency: null,
        price: null,
      },
      price: {
        currency: null,
        price: null,
      },
      status: null,
      title: null,
      video: null,
    },
    images: [],
  }

  ngOnInit() {
    this.http.getData()
      .subscribe(result => {
        this.buildingComplex = <BuildingComplex>result;
        this.buildingComplex.images.forEach(item => {
          let temp = item.date.split('.');
          let date = new Date(+temp[2], +temp[1]-1, +temp[0]);
          item.date = date;
        })
      })
    this.initMap();
  }

  API_KEY = 'AIzaSyCufhV5XQvC9DS1VJxUZCvkmjHTIBqXRe8';
  map: any;
  marker: any;

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: { lat: 50.4546600, lng: 30.5238000 },
      gestureHandling: 'greedy'
    });

    this.initAutocomplete();
  }


  initAutocomplete() {
    let input = document.getElementById('buildingComplex.address'),
      autocomplete = new google.maps.places.Autocomplete(<HTMLInputElement>input);


    autocomplete.bindTo('bounds', this.map);

    this.marker = new google.maps.Marker({
      anchorPoint: new google.maps.Point(0, -29),
      map: this.map,
      position: autocomplete.getPlace() ? autocomplete.getPlace().geometry.location : { lat: 50.4546600, lng: 30.5238000 },
    });

    autocomplete.addListener('place_changed', () => {
      this.marker.setVisible(false);
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);  // Why 17? Because it looks good.
      }
      this.buildingComplex.lat = place.geometry.location.lat();
      this.buildingComplex.lng = place.geometry.location.lng();
      this.marker.setPosition(place.geometry.location);
      this.marker.setVisible(true);

      this.getLocationDataByCoordinates(this.buildingComplex.lat, this.buildingComplex.lng);
    });

    google.maps.event.addListener(this.map, 'click', (event) => {
      this.moveMarker(event.latLng);
      this.getLocationDataByCoordinates(
        this.marker.getPosition().lat(),
        this.marker.getPosition().lng()
      );
    });
  }

  moveMarker(position) {
    this.buildingComplex.lat = position.lat();
    this.buildingComplex.lng = position.lng();
    this.marker.setPosition(position);
  }

  getLocationDataByCoordinates(lat, lng) {
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json', { latlng: lat + ',' + lng, key: this.API_KEY })
      .subscribe(result => {
        let value: GoogleResult = <GoogleResult>result; 
        if (value.results[0]) {
          this.buildingComplex.lat = value.results[0].geometry.location.lat;
          this.buildingComplex.lng = value.results[0].geometry.location.lng;
          this.setAddressToInput(value.results[0].address_components);
        }
      });
  }

  setAddressToInput(addressComponentsArray) {

    this.buildingComplex.locality = '';
    this.buildingComplex.route = '';
    this.buildingComplex.streetNumber = '';
    this.buildingComplex.sublocalityLevel1 = '';
    this.buildingComplex.country = '';
    this.buildingComplex.administrativeAreaLevel3 = '';
    this.buildingComplex.administrativeAreaLevel2 = '';
    this.buildingComplex.administrativeAreaLevel1 = '';

    let city = '',
      street = '',
      street_number = '';
    addressComponentsArray.forEach((value) => {
      switch (value.types[0]) {
        case 'locality': {
          city = value.long_name;
          this.buildingComplex.locality = value.short_name;
          break;
        }
        case 'route': {
          street = value.long_name;
          this.buildingComplex.route = value.short_name;
          break;
        }
        case 'street_number': {
          street_number = value.long_name;
          this.buildingComplex.streetNumber = value.short_name;
          break;
        }
        case 'political': {
          this.buildingComplex.sublocalityLevel1 = value.short_name;
          break;
        }
        case 'sublocality': {
          this.buildingComplex.sublocalityLevel1 = value.short_name;
          break;
        }
        case 'sublocality_level_1': {
          this.buildingComplex.sublocalityLevel1 = value.short_name;
          break;
        }
        case 'country': {
          this.buildingComplex.country = value.short_name;
          break;
        }
        case 'administrative_area_level_3': {
          this.buildingComplex.administrativeAreaLevel3 = value.short_name;
          break;
        }
        case 'administrative_area_level_2': {
          this.buildingComplex.administrativeAreaLevel2 = value.short_name;
          break;
        }
        case 'administrative_area_level_1': {
          this.buildingComplex.administrativeAreaLevel1 = value.short_name;
          break;
        }
      }
    });

    this.buildingComplex.buildingComplex.address = city + ', ' + street + ', ' + street_number;
    this.cd.detectChanges();
  }

}
