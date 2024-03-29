import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaMarketingComponent } from './social-media-marketing.component';

describe('SocialMediaMarketingComponent', () => {
  let component: SocialMediaMarketingComponent;
  let fixture: ComponentFixture<SocialMediaMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaMarketingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
