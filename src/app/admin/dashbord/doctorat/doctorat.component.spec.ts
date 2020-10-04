import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoratComponent } from './doctorat.component';

describe('DoctoratComponent', () => {
  let component: DoctoratComponent;
  let fixture: ComponentFixture<DoctoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
