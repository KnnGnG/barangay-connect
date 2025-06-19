import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
  standalone: false,
})
export class AppointmentsPage {
  appointmentPurpose: string = '';
  appointmentDate: string = '';
  appointmentTime: string = '';
  appointmentNotes: string = '';
  
  minDate = new Date().toISOString();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
  
  appointments = [
    { id: 1, purpose: 'meeting', date: '2023-06-20', time: '10:00', notes: 'Discuss road repairs', status: 'confirmed' },
    { id: 2, purpose: 'document', date: '2023-06-22', time: '14:30', notes: '', status: 'pending' }
  ];

  constructor(private navCtrl: NavController) {}

  scheduleAppointment() {
    if (this.appointmentPurpose && this.appointmentDate && this.appointmentTime) {
      const newAppointment = {
        id: this.appointments.length + 1,
        purpose: this.appointmentPurpose,
        date: this.appointmentDate.split('T')[0],
        time: this.formatTime(this.appointmentTime),
        notes: this.appointmentNotes,
        status: 'pending'
      };
      this.appointments.push(newAppointment);
      console.log('Scheduled appointment:', newAppointment);
      this.resetForm();
    }
  }

  viewAppointment(id: number) {
    this.navCtrl.navigateForward(['appointments', id]);
  }

  getPurposeName(purpose: string): string {
    const purposes: {[key: string]: string} = {
      meeting: 'Meeting',
      document: 'Document Processing',
      complaint: 'Complaint',
      other: 'Other'
    };
    return purposes[purpose] || purpose;
  }

  formatTime(timeString: string): string {
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  resetForm() {
    this.appointmentPurpose = '';
    this.appointmentDate = '';
    this.appointmentTime = '';
    this.appointmentNotes = '';
  }
}