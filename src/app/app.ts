import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from "./components/hero/hero";
// import { Trash } from './components/trash/trash';

@Component({
  selector: 'app-root',
  imports: [ Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MostafaElabsawyPortfolio');
}
