import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
  standalone: false,
})
export class DocumentsPage {
  selectedDocType: string = '';
  requests = [
    { id: 1, type: 'clearance', date: new Date('2023-05-15'), status: 'approved' },
    { id: 2, type: 'indigency', date: new Date('2023-06-01'), status: 'pending' },
    { id: 3, type: 'permit', date: new Date('2023-06-10'), status: 'rejected' }
  ];

  constructor(private navCtrl: NavController) {}

  uploadFile() {
    console.log('File upload triggered');
    // Implement file upload logic
  }

  submitRequest() {
    if (this.selectedDocType) {
      console.log('Submitting request for:', this.selectedDocType);
      // Implement submission logic
    }
  }

  viewRequestDetails(id: number) {
    this.navCtrl.navigateForward(['documents', id]);
  }

  getDocTypeName(type: string): string {
    const types: {[key: string]: string} = {
      clearance: 'Barangay Clearance',
      indigency: 'Certificate of Indigency',
      permit: 'Business Permit'
    };
    return types[type] || type;
  }

  getDocIcon(type: string): string {
    const icons: {[key: string]: string} = {
      clearance: 'document-text',
      indigency: 'ribbon',
      permit: 'business'
    };
    return icons[type] || 'document';
  }

  getStatusColor(status: string): string {
    switch(status.toLowerCase()) {
      case 'approved': return 'success';
      case 'pending': return 'warning';
      case 'rejected': return 'danger';
      default: return 'medium';
    }
  }
}