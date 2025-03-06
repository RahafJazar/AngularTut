import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToDoListPagesComponent } from './my-to-do-list-pages.component';

describe('MyToDoListPagesComponent', () => {
  let component: MyToDoListPagesComponent;
  let fixture: ComponentFixture<MyToDoListPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyToDoListPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyToDoListPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
