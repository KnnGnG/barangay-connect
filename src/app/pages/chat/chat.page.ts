import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})
export class ChatPage {
  newMessage: string = '';
  messages = [
    { text: 'Hello! How can I help you today?', sent: false, time: new Date(Date.now() - 60000) },
    { text: 'I need help with my document request', sent: true, time: new Date() }
  ];
  showChatbot: boolean = true;

  constructor(private navCtrl: NavController) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        sent: true,
        time: new Date()
      });
      
      // Simulate reply
      setTimeout(() => {
        this.messages.push({
          text: 'Thanks for your message. Our team will get back to you shortly.',
          sent: false,
          time: new Date()
        });
      }, 1000);
      
      this.newMessage = '';
    }
  }

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
    if (this.showChatbot) {
      this.messages.push({
        text: 'Chatbot is now online. How can I help you?',
        sent: false,
        time: new Date()
      });
    }
  }
}