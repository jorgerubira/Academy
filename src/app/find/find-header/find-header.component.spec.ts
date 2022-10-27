import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHeaderComponent } from './find-header.component';

describe('FindHeaderComponent', () => {
  let component: FindHeaderComponent;
  let fixture: ComponentFixture<FindHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
