import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormOneComponent } from './test-form-one.component';

describe('TestFormOneComponent', () => {
  let component: TestFormOneComponent;
  let fixture: ComponentFixture<TestFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
