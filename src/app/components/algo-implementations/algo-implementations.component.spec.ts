import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoImplementationsComponent } from './algo-implementations.component';

describe('AlgoImplementationsComponent', () => {
  let component: AlgoImplementationsComponent;
  let fixture: ComponentFixture<AlgoImplementationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoImplementationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoImplementationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
