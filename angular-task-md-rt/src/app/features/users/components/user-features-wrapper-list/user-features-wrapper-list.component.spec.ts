import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeaturesWrapperListComponent } from './user-features-wrapper-list.component';

describe('UserFeaturesWrapperListComponent', () => {
  let component: UserFeaturesWrapperListComponent;
  let fixture: ComponentFixture<UserFeaturesWrapperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFeaturesWrapperListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFeaturesWrapperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
