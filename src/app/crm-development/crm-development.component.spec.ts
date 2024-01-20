import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmDevelopmentComponent } from './crm-development.component';

describe('CrmDevelopmentComponent', () => {
  let component: CrmDevelopmentComponent;
  let fixture: ComponentFixture<CrmDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrmDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
