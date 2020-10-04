import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersearchComponent } from './mastersearch.component';

describe('MastersearchComponent', () => {
  let component: MastersearchComponent;
  let fixture: ComponentFixture<MastersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastersearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
