import { Routes } from '@angular/router';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';

export const routes: Routes = [{
    path: '', // No 'about' prefix required in the URL
    children: [
      {path:"",redirectTo:"education",pathMatch:"full"},// URL: /my-education
      { path: 'skills', component: Skills },     // URL: /my-skills
      { path: 'education', component: Education }
    ]
  }
];
