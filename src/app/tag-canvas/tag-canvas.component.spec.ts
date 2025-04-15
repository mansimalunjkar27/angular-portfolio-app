import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCanvasComponent } from './tag-canvas.component';

describe('TagCanvasComponent', () => {
  let component: TagCanvasComponent;
  let fixture: ComponentFixture<TagCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
