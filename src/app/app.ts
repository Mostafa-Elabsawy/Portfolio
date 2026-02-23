import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Trash } from './utility/trash/trash';
import { ProgressBar } from './utility/progress-bar/progress-bar';
import { AboutMe } from './components/about-me/about-me';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
// import { Trash } from './components/trash/trash';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Trash, Projects, AboutMe, Services, AnimateOnScrollModule, Contact,Footer],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('MostafaElabsawyPortfolio');
}
