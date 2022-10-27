import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCategoriesComponent } from './find-categories.component';

describe('FindCategoriesComponent', () => {
  let component: FindCategoriesComponent;
  let fixture: ComponentFixture<FindCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
