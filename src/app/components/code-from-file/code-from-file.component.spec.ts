import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFromFileComponent } from './code-from-file.component';

describe('CodeFromFileComponent', () => {
  let component: CodeFromFileComponent;
  let fixture: ComponentFixture<CodeFromFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFromFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFromFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
