import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-locationpermission',
  imports: [MatGridListModule,MatSlideToggleModule],
  templateUrl: './locationpermission.component.html',
  styleUrl: './locationpermission.component.scss'
})
export class LocationpermissionComponent {
breakpoint: number=0;
  latitude: number | null = null;
  longitude: number | null = null;
  errorMessage: string = '';

  constructor() { }

  ngOnInit() {
    this.breakpoint = 1;
    this.getLocation();
  }
  
  onResize(event:any) {
    this.breakpoint = 1;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              this.errorMessage = 'User denied the request for geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              this.errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              this.errorMessage = 'The request to get user location timed out.';
              break;
            default:
              this.errorMessage = 'An unknown error occurred.';
              break;
          }
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by this browser.';
    }
  }
}
