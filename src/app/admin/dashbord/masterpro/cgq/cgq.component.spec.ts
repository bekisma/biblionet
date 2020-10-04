import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgqComponent } from './cgq.component';

describe('CgqComponent', () => {
  let component: CgqComponent;
  let fixture: ComponentFixture<CgqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
