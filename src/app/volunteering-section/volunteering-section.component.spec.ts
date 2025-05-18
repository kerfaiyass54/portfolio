import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringSectionComponent } from './volunteering-section.component';

describe('VolunteeringSectionComponent', () => {
  let component: VolunteeringSectionComponent;
  let fixture: ComponentFixture<VolunteeringSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteeringSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteeringSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
