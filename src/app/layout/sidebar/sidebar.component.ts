import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.setInitialTheme();
  }

  changeTheme(): void {
    this.themeService.changeTheme();
  }

  get currentTheme(): string {
    return this.themeService.currentTheme;
  }

}
