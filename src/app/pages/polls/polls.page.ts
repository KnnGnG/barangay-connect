import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.page.html',
  styleUrls: ['./polls.page.scss'],
  standalone: false,
})
export class PollsPage {
  activePolls = [
    {
      id: 1,
      question: 'Which community project should we prioritize next?',
      endDate: new Date('2023-07-15'),
      options: [
        { id: 1, text: 'Road repairs', votes: 45 },
        { id: 2, text: 'Park renovation', votes: 32 },
        { id: 3, text: 'Drainage system', votes: 28 }
      ]
    },
    {
      id: 2,
      question: 'Preferred day for community clean-up',
      endDate: new Date('2023-06-30'),
      options: [
        { id: 1, text: 'Saturday', votes: 18 },
        { id: 2, text: 'Sunday', votes: 12 }
      ]
    }
  ];
  
  userVotes: {[key: number]: number} = {};

  constructor(private navCtrl: NavController) {}

  vote(pollId: number, optionId: number) {
    if (!this.hasVoted(pollId)) {
      this.userVotes[pollId] = optionId;
      
      // Update vote count
      const poll = this.activePolls.find(p => p.id === pollId);
      if (poll) {
        const option = poll.options.find(o => o.id === optionId);
        if (option) {
          option.votes++;
        }
      }
    }
  }

  hasVoted(pollId: number): boolean {
    return this.userVotes[pollId] !== undefined;
  }

  getSelectedOption(pollId: number): number {
    return this.userVotes[pollId];
  }

  getSelectedOptionText(pollId: number): string {
    const poll = this.activePolls.find(p => p.id === pollId);
    if (poll && this.userVotes[pollId]) {
      const option = poll.options.find(o => o.id === this.userVotes[pollId]);
      return option ? option.text : '';
    }
    return '';
  }

  getTotalVotes(poll: any): number {
    return poll.options.reduce((sum: number, option: any) => sum + option.votes, 0);
  }

  getOptionPercentage(poll: any, optionId: number): number {
    const option = poll.options.find((o: any) => o.id === optionId);
    if (option) {
      const total = this.getTotalVotes(poll);
      return total > 0 ? option.votes / total : 0;
    }
    return 0;
  }
}