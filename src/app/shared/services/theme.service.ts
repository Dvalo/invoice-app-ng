import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'theme-type';
  private readonly darkTheme = 'theme-dark';
  private readonly lightTheme = 'theme-light';

  currentTheme = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.currentTheme =
      localStorage.getItem(this.themeKey) === this.lightTheme
        ? this.lightTheme
        : this.darkTheme;
  }

  setInitialTheme(): void {
    this.updateTheme(this.currentTheme);
  }

  changeTheme(): void {
    if (this.currentTheme === this.darkTheme) {
      this.updateTheme(this.lightTheme);
    } else {
      this.updateTheme(this.darkTheme);
    }
  }


  private updateTheme(newTheme: string): void {
    localStorage.setItem(this.themeKey, newTheme);
    this.document.body.classList.remove(newTheme === this.darkTheme ? this.lightTheme : this.darkTheme);
    this.document.body.classList.add(newTheme);
    this.currentTheme = newTheme;
  }
}
