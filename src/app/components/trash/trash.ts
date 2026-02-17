import { Component, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';

@Component({
  templateUrl: './trash.html',
  standalone: true,
  selector: 'app-trash',
  imports: [AvatarModule, ButtonModule, DrawerModule, RippleModule]
})
export class DrawerHeadlessDemo {
  visible: boolean = false;

  @ViewChild('drawerRef') drawerRef!: Drawer;
  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }
}
