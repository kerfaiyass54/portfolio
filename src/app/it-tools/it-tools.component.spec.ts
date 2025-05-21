import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItToolsComponent } from './it-tools.component';

describe('ItToolsComponent', () => {
  let component: ItToolsComponent;
  let fixture: ComponentFixture<ItToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
