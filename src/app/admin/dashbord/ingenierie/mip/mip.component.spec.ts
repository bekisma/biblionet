import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MipComponent } from './mip.component';

describe('MipComponent', () => {
  let component: MipComponent;
  let fixture: ComponentFixture<MipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
