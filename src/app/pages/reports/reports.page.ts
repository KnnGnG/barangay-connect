import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: false,
})
export class ReportsPage {
  incidentType: string = '';
  description: string = '';
  photo: string = '';
  location: any = null;

  constructor(private navCtrl: NavController) {}

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.photo = image.webPath || '';
  }

  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }

  submitReport() {
    if (this.incidentType && this.description) {
      const report = {
        type: this.incidentType,
        description: this.description,
        photo: this.photo,
        location: this.location,
        date: new Date()
      };
      console.log('Submitting report:', report);
      // Implement submission logic
      this.navCtrl.navigateBack('/home');
    }
  }
}