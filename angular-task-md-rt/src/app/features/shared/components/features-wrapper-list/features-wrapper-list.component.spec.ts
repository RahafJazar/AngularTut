import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesWrapperListComponent } from './features-wrapper-list.component';

describe('FeaturesWrapperListComponent', () => {
  let component: FeaturesWrapperListComponent;
  let fixture: ComponentFixture<FeaturesWrapperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturesWrapperListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesWrapperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
