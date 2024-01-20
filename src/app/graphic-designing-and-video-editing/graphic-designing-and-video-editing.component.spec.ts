import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesigningAndVideoEditingComponent } from './graphic-designing-and-video-editing.component';

describe('GraphicDesigningAndVideoEditingComponent', () => {
  let component: GraphicDesigningAndVideoEditingComponent;
  let fixture: ComponentFixture<GraphicDesigningAndVideoEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicDesigningAndVideoEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicDesigningAndVideoEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
