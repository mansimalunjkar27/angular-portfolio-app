import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

declare var TagCanvas: any;

@Component({
  selector: 'app-tag-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-canvas.component.html',
  styleUrls: ['./tag-canvas.component.css']
})
export class TagCanvasComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    try {
      TagCanvas.Start('techCanvas', 'tagList', {
        textColour: null,
        // outlineColour: '#0ff',
        outlineColour: 'transparent',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.06,
        wheelZoom: false,
        textFont: 'Courier New',
        weight: true,
        initial: [0.1, -0.1],
        // freezeDecel: true,
        // decel: 0.98,
        // outlineMethod: 'block',
      });
    } catch (e) {
      console.error('TagCanvas error:', e);
    }
  } 
}
