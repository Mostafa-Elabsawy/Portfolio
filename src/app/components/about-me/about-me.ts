import { Component, inject, signal,OnInit,AfterViewInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {  AnimateOnScrollModule } from 'primeng/animateonscroll';
// import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AnimateOnScrollModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe{
  activeTap = signal<string>('education');
  updateTap(tap: string) {
    this.activeTap.set(tap);
  }
 
}
