import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { TagCanvasComponent } from '../tag-canvas/tag-canvas.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink ,ThemeToggleComponent,TagCanvasComponent],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '/src/styles.css'
  ]
})
export class AboutComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('About')
  }
  
}
