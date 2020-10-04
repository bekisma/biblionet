import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeaiComponent } from './ieai.component';

describe('IeaiComponent', () => {
  let component: IeaiComponent;
  let fixture: ComponentFixture<IeaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IeaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
