import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigeComponent } from './cige.component';

describe('CigeComponent', () => {
  let component: CigeComponent;
  let fixture: ComponentFixture<CigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CigeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
