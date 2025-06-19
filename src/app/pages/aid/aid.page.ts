import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aid',
  templateUrl: './aid.page.html',
  styleUrls: ['./aid.page.scss'],
  standalone: false,
})
export class AidPage {
  aidType: string = '';
  reason: string = '';
  familySize: number | null = null;
  proofDocument: string = '';
  
  applications = [
    { id: 1, type: 'financial', reason: 'Lost job due to pandemic', date: new Date('2023-05-10'), status: 'approved' },
    { id: 2, type: 'food', reason: 'Family affected by typhoon', date: new Date('2023-06-05'), status: 'pending' }
  ];

  constructor(private navCtrl: NavController) {}

  uploadProof() {
    console.log('Upload proof triggered');
    // Implement file upload logic
  }

  submitApplication() {
    if (this.aidType && this.reason && this.familySize) {
      const newApplication = {
        id: this.applications.length + 1,
        type: this.aidType,
        reason: this.reason,
        familySize: this.familySize,
        proof: this.proofDocument,
        date: new Date(),
        status: 'pending'
      };
      this.applications.push(newApplication);
      console.log('Submitted application:', newApplication);
      this.resetForm();
    }
  }

  getAidTypeName(type: string): string {
    const types: {[key: string]: string} = {
      financial: 'Financial Assistance',
      food: 'Food Pack',
      medical: 'Medical Assistance',
      other: 'Other Aid'
    };
    return types[type] || type;
  }

  getAidIcon(type: string): string {
    const icons: {[key: string]: string} = {
      financial: 'cash',
      food: 'fast-food',
      medical: 'medkit',
      other: 'help-circle'
    };
    return icons[type] || 'help';
  }

  getStatusColor(status: string): string {
    switch(status.toLowerCase()) {
      case 'approved': return 'success';
      case 'pending': return 'warning';
      case 'rejected': return 'danger';
      default: return 'medium';
    }
  }

  resetForm() {
    this.aidType = '';
    this.reason = '';
    this.familySize = null;
    this.proofDocument = '';
  }
}

