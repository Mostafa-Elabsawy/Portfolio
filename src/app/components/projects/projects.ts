import { Component } from '@angular/core';
import { ProjectTemp } from './project-temp/project-temp';
import{ template,init_value } from './project-temp/interface'

@Component({
  selector: 'app-projects',
  imports: [ProjectTemp],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  project1: template = {
    title: 'Portfolio',
    description:
      'A responsive personal portfolio showcasing my projects, skills, and experience with a clean, modern, mobile-friendly design.',
    image: './images/project1.png',
    code: '',
    link: '',
    tools: [
      'icons/html5.webp',
      'icons/css3.png',
      'icons/typescript.svg',
      'icons/angular.svg',
      'icons/primeng.png',
      'icons/tailwind.svg',
    ],
  };
  project3: template = {
    title: 'Login & Signup interface',
    description:
      'A responsive front-end project that demonstrates login and signup interfaces with form validation and clean user experience.',
    image: './images/project3.png',
    code: '',
    link: '',
    tools: ['icons/html5.webp', 'icons/css3.png', 'icons/js.svg'],
  };

  project2: template = {
    title: 'Bussiness marketing',
    description:
      'A responsive business landing page designed to present offerings, attract users, and provide clear call-to-action sections.',
    image: './images/project2.png',
    code: '',
    link: '',
    tools: [
      'icons/html5.webp',
      'icons/css3.png',
      'icons/js.svg',
      'icons/bootstrap.png'
    ],
  };
}
