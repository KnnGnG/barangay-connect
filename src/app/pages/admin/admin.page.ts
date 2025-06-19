import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false,
})
export class AdminPage {
  quickStats = [
    { label: 'Document Requests', value: 24 },
    { label: 'Incident Reports', value: 8 },
    { label: 'Appointments', value: 15 },
    { label: 'Aid Applications', value: 12 }
  ];

  pendingActions = [
    { title: 'Document Approvals', count: 5, icon: 'document-text', color: 'primary', link: '/admin/documents' },
    { title: 'Incident Reports', count: 3, icon: 'alert-circle', color: 'danger', link: '/admin/reports' },
    { title: 'Appointments', count: 7, icon: 'calendar', color: 'secondary', link: '/admin/appointments' },
    { title: 'Aid Applications', count: 4, icon: 'help-buoy', color: 'tertiary', link: '/admin/aid' }
  ];

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {
    if (localStorage.getItem('isAdmin') !== 'true') {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    localStorage.removeItem('isAdmin');
    this.navCtrl.navigateRoot('/home');
  }
}