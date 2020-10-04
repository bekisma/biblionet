import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimeComponent } from './sime.component';

describe('SimeComponent', () => {
  let component: SimeComponent;
  let fixture: ComponentFixture<SimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
