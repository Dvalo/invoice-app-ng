import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  isToggled: boolean = false;

  drawerToggle: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  openDrawer(): void {
    this.drawerToggle.next(true);
  }

  closeDrawer(): void {
    this.drawerToggle.next(false);
  }
}
