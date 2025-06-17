import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
  standalone: false,
})
export class DocumentsPage {
  requests = [
    { type: 'clearance', date: new Date('2023-05-15'), status: 'approved' },
    { type: 'indigency', date: new Date('2023-06-01'), status: 'pending' }
  ];

  constructor(private navCtrl: NavController) {}

  uploadFile() {
    
  }

  submitRequest() {
    
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'approved': return 'green';
      case 'pending': return 'orange';
      case 'rejected': return 'red';
      default: return 'black';
    }
  }
}