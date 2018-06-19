import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAsideComponent } from './steps-aside.component';

describe('StepsAsideComponent', () => {
  let component: StepsAsideComponent;
  let fixture: ComponentFixture<StepsAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
