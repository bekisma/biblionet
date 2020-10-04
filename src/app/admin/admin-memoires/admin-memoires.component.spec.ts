import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMemoiresComponent } from './admin-memoires.component';

describe('AdminMemoiresComponent', () => {
  let component: AdminMemoiresComponent;
  let fixture: ComponentFixture<AdminMemoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMemoiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMemoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
