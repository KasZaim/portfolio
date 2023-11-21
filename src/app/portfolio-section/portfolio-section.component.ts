import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = window.innerWidth <= 850;
  }

  constructor() {
    this.isSmallScreen = window.innerWidth <= 850;
  }
}
