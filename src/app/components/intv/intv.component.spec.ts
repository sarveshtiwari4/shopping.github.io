import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntvComponent } from './intv.component';

describe('IntvComponent', () => {
  let component: IntvComponent;
  let fixture: ComponentFixture<IntvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
