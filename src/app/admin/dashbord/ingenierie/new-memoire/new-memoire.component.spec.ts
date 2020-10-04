import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemoireComponent } from './new-memoire.component';

describe('NewMemoireComponent', () => {
  let component: NewMemoireComponent;
  let fixture: ComponentFixture<NewMemoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMemoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
