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
    title: 'Pizza Resturant',
    description:
      'A responsive business landing page designed to present offerings, attract users, and provide clear call-to-action sections.',
    image: './Project2.png',
    code: '',
    link: 'https://pizza-resturant-silk.vercel.app',
    tools: [
      'icons/html5.webp',
      'icons/css3.png',
      'icons/typescript.svg',
      'icons/angular.svg',
      'icons/primeng.png',
      'icons/tailwind.svg',
    ],
  };
  project2: template = {
    title: 'Marketing',
    description:
      'A responsive personal portfolio showcasing my projects, skills, and experience with a clean, modern, mobile-friendly design.',
    image: './Project1.png',
    code: '',
    link: 'https://nova-gray-nine.vercel.app',
    tools: ['icons/html5.webp', 'icons/css3.png', 'icons/js.svg', 'icons/bootstrap.png'],
  };
  project3: template = {
    title: 'Landing page',
    description:
      'A responsive front-end project that demonstrates login and signup interfaces with form validation and clean user experience.',
    image: 'project3.png',
    code: '',
    link: 'https://my-landingpage-99.vercel.app/',
    tools: ['icons/html5.webp', 'icons/css3.png', 'icons/js.svg'],
  };
}
