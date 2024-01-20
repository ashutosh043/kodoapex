import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceDevelopmentComponent } from './e-commerce-development.component';

describe('ECommerceDevelopmentComponent', () => {
  let component: ECommerceDevelopmentComponent;
  let fixture: ComponentFixture<ECommerceDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ECommerceDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
