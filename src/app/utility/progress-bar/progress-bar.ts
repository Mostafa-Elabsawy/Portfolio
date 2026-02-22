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
  color = input('#9CA3AF');
  bar_color = input('linear-gradient(90deg, #10b981, #06b6d4)');
}
