import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGeftComponent } from './main-geft.component';

describe('MainGeftComponent', () => {
  let component: MainGeftComponent;
  let fixture: ComponentFixture<MainGeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
