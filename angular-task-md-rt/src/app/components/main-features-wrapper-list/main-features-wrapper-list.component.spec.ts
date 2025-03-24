import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeaturesWrapperListComponent } from './main-features-wrapper-list.component';

describe('MainFeaturesWrapperListComponent', () => {
  let component: MainFeaturesWrapperListComponent;
  let fixture: ComponentFixture<MainFeaturesWrapperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainFeaturesWrapperListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainFeaturesWrapperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
