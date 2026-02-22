import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.html',
  styleUrls: ['./trash.css'],
  standalone: true,
  imports: [KnobModule, FormsModule],
})
export class Trash {
  value: number = 50;
}
