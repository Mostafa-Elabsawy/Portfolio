import { Component } from '@angular/core';
import { Skills } from '../skills/skills';
import { Education } from '../education/education';
import { RouterModule, RouterOutlet } from '@angular/router';
// import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [Skills,Education,RouterOutlet,RouterModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',

})
export class AboutMe {

}
