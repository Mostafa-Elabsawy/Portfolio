import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { StyleClassModule } from 'primeng/styleclass';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [
    StyleClassModule,
    ToolbarModule,
    ButtonModule,
    NgClass,
    AvatarModule,
    InputTextModule,
    RippleModule,
  ],
})
export class Navbar {
  // cssVars: { [key: string]: string } = {};
  // cssVarKeys: string[] = [];
  // ngOnInit(): void {
  //   // Get computed styles for :root
  //   const rootStyles = getComputedStyle(document.documentElement);

  //   for (let i = 0; i < rootStyles.length; i++) {
  //     const name = rootStyles[i];
  //     if (name.startsWith('--')) {
  //       this.cssVars[name] = rootStyles.getPropertyValue(name).trim();
  //     }
  //   }

  //   this.cssVarKeys = Object.keys(this.cssVars);
  //   console.log(this.cssVars); // also log in console
  // }
  activetab = signal<string | null>(null);
  menuOpen: WritableSignal<boolean> = signal(true);
  Toggle()
  {
    this.menuOpen.update((v : boolean)   => !v);
  }

  scrollTo(section: string) {
    // this.activetab.set(section);
  }
}