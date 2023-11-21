import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {

  normalImage: string ='./assets/img/bars_white.png';
  hoverImage: string ='./assets/img/bars_blue.png';
  currentImage: string= this.normalImage;

  isMenuOpen: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}

 

