import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
 
})
export class ThemeToggleComponent {
  
  isDark = true;
  body = document.body;
  toggleTheme(): void {
    this.isDark = !this.isDark;
   
    this.body.classList.toggle('dark-theme', this.isDark);
    this.body.classList.toggle('light-theme', !this.isDark);
  }
}


