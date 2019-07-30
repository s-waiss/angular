import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaslolimComponent } from './maslolim.component';

describe('MaslolimComponent', () => {
  let component: MaslolimComponent;
  let fixture: ComponentFixture<MaslolimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaslolimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaslolimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
