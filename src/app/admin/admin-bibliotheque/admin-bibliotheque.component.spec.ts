import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBibliothequeComponent } from './admin-bibliotheque.component';

describe('AdminBibliothequeComponent', () => {
  let component: AdminBibliothequeComponent;
  let fixture: ComponentFixture<AdminBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBibliothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
