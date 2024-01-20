import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxDesigningComponent } from './ux-designing.component';

describe('UxDesigningComponent', () => {
  let component: UxDesigningComponent;
  let fixture: ComponentFixture<UxDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxDesigningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UxDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
