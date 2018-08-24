import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtestpostComponent } from './blogtestpost.component';

describe('BlogtestpostComponent', () => {
  let component: BlogtestpostComponent;
  let fixture: ComponentFixture<BlogtestpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogtestpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogtestpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
