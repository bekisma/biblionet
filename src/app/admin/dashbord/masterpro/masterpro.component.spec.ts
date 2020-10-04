import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterproComponent } from './masterpro.component';

describe('MasterproComponent', () => {
  let component: MasterproComponent;
  let fixture: ComponentFixture<MasterproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
