import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBodyComponent } from './find-body.component';

describe('FindBodyComponent', () => {
  let component: FindBodyComponent;
  let fixture: ComponentFixture<FindBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
