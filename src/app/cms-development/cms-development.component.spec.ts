import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsDevelopmentComponent } from './cms-development.component';

describe('CmsDevelopmentComponent', () => {
  let component: CmsDevelopmentComponent;
  let fixture: ComponentFixture<CmsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
