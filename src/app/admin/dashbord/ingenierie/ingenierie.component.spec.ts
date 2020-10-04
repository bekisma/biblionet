import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieComponent } from './ingenierie.component';

describe('IngenierieComponent', () => {
  let component: IngenierieComponent;
  let fixture: ComponentFixture<IngenierieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
