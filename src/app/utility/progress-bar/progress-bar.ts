import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  standalone: true,
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  value = input('100');
  color = input('#fff');
  bar_color = input('var(--grad2');
}
