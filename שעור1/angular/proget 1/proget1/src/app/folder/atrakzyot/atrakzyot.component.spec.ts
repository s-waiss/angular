import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrakzyotComponent } from './atrakzyot.component';

describe('AtrakzyotComponent', () => {
  let component: AtrakzyotComponent;
  let fixture: ComponentFixture<AtrakzyotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrakzyotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrakzyotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
