import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: false,
})
export class FeedbackPage {
  serviceType: string = '';
  rating: number = 0;
  comments: string = '';
  
  feedbackHistory = [
    { serviceType: 'document', rating: 4, comments: 'Fast processing but staff could be more friendly', date: new Date('2023-05-20') },
    { serviceType: 'complaint', rating: 5, comments: 'My complaint was resolved quickly', date: new Date('2023-06-02') }
  ];

  constructor(private navCtrl: NavController) {}

  submitFeedback() {
    if (this.serviceType && this.rating > 0) {
      const newFeedback = {
        serviceType: this.serviceType,
        rating: this.rating,
        comments: this.comments,
        date: new Date()
      };
      this.feedbackHistory.push(newFeedback);
      console.log('Submitted feedback:', newFeedback);
      this.resetForm();
    }
  }

  getServiceTypeName(type: string): string {
    const types: {[key: string]: string} = {
      document: 'Document Processing',
      complaint: 'Complaint Handling',
      appointment: 'Appointment',
      general: 'General Service'
    };
    return types[type] || type;
  }

  resetForm() {
    this.serviceType = '';
    this.rating = 0;
    this.comments = '';
  }
}