import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfactsComponent } from './ourfacts.component';

describe('OurfactsComponent', () => {
  let component: OurfactsComponent;
  let fixture: ComponentFixture<OurfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurfactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
