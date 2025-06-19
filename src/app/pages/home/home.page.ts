import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}