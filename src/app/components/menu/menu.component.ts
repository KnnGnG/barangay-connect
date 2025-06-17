import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false,
})
export class MenuComponent {
  @Input() isAdmin = false;

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}