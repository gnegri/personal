import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblogpostComponent } from './singleblogpost.component';

describe('SingleblogpostComponent', () => {
  let component: SingleblogpostComponent;
  let fixture: ComponentFixture<SingleblogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleblogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleblogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
