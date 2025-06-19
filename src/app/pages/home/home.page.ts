import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  features = [
    { title: 'Documents', path: 'documents', icon: 'document-text', color: 'primary' },
    { title: 'Report Incident', path: 'reports', icon: 'alert-circle', color: 'danger' },
    { title: 'Appointments', path: 'appointments', icon: 'calendar', color: 'secondary' },
    { title: 'Community Polls', path: 'polls', icon: 'people', color: 'tertiary' }
  ];

  quickActions = [
    { title: 'Live Chat', path: 'chat', icon: 'chatbubbles' },
    { title: 'Aid/Relief', path: 'aid', icon: 'help-buoy' },
    { title: 'Feedback', path: 'feedback', icon: 'thumbs-up' }
  ];

  showAdminLogin = false;
  adminUsername = '';
  adminPassword = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  openNotifications() {
    this.router.navigate(['notifications']);
  }

  toggleAdminLogin() {
    this.showAdminLogin = !this.showAdminLogin;
  }

  async adminLogin() {
    if (this.adminUsername === 'admin' && this.adminPassword === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      this.showAdminLogin = false;
      this.router.navigate(['/admin']);
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid username or password',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}