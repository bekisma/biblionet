import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmemoireComponent } from './addmemoire.component';

describe('AddmemoireComponent', () => {
  let component: AddmemoireComponent;
  let fixture: ComponentFixture<AddmemoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmemoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
