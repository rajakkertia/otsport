import { Component, Input, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [slideInOutAnimation],
  // animations: [
  //   trigger('fade', [
  //     transition(':enter', [
  //       style({ tranform: 'translateY(-100%)' }),
  //       animate('500ms ease-out', style({ transform: 'translateY(0)' })),
  //     ]),
  //     transition(':leave', [
  //       animate('500ms ease-out', style({ transform: 'translateY(100%)' })),
  //     ]),
  //   ]),
  // ],
})
export class AppHeaderComponent implements OnInit {

  @Input() pageName = "";


  constructor() {}

  ngOnInit(): void {}

  mobileMenuOpen = false;
  menuToggled = false;
  toggleFlag = false;
  currentIcon = 'menuOpen';

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleMainMenu() {
    this.menuToggled = !this.menuToggled;

    this.currentIcon = this.menuToggled ? 'menuClose' : 'menuOpen';
  }
}
