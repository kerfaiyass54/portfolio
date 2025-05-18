import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatinSectionComponent } from './educatin-section.component';

describe('EducatinSectionComponent', () => {
  let component: EducatinSectionComponent;
  let fixture: ComponentFixture<EducatinSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducatinSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducatinSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
