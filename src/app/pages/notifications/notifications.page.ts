import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage {
  notifications = [
    { 
      id: 1,
      title: 'Document Approved', 
      message: 'Your barangay clearance has been approved', 
      type: 'document',
      time: new Date('2023-06-18T10:30:00'),
      read: false
    },
    { 
      id: 2,
      title: 'Appointment Reminder', 
      message: 'You have an appointment tomorrow at 2:00 PM', 
      type: 'appointment',
      time: new Date('2023-06-17T15:45:00'),
      read: true
    },
    { 
      id: 3,
      title: 'Community Announcement', 
      message: 'Scheduled power interruption on June 20', 
      type: 'announcement',
      time: new Date('2023-06-16T09:15:00'),
      read: true
    }
  ];

  constructor(private navCtrl: NavController) {}

  getNotificationIcon(type: string): string {
    const icons: {[key: string]: string} = {
      document: 'document-text',
      appointment: 'calendar',
      announcement: 'megaphone',
      emergency: 'warning'
    };
    return icons[type] || 'notifications';
  }

  getNotificationColor(type: string): string {
    const colors: {[key: string]: string} = {
      document: 'primary',
      appointment: 'secondary',
      announcement: 'tertiary',
      emergency: 'danger'
    };
    return colors[type] || 'medium';
  }

  viewNotification(notification: any) {
    notification.read = true;
    // Navigate based on notification type
    switch(notification.type) {
      case 'document':
        this.navCtrl.navigateForward(['documents']);
        break;
      case 'appointment':
        this.navCtrl.navigateForward(['appointments']);
        break;
      default:
        // Do nothing for other types
        break;
    }
  }

  markAllAsRead() {
    this.notifications.forEach(notification => notification.read = true);
  }
}