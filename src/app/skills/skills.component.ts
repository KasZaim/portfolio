import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', image: './assets/img/icons/angular.png' },
    { name: 'Typescript', image: './assets/img/icons/typescript.png' },
    { name: 'Javascript', image: './assets/img/icons/javascript.png' },
    { name: 'HTML', image: './assets/img/icons/html.png' },
    { name: 'Firebase', image: './assets/img/icons/firebase.png' },
    { name: 'GIT', image: './assets/img/icons/git.png' },
    { name: 'CSS', image: './assets/img/icons/css.png' },
    { name: 'Rest-API', image: './assets/img/icons/api.png' },
    { name: 'Material Design', image: './assets/img/icons/material_design.png' },
    { name: 'Scrum', image: './assets/img/icons/scrum.png' }
  ];
}
