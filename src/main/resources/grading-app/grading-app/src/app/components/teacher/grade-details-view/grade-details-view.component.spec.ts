import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDetailsViewComponent } from './grade-details-view.component';

describe('GradeDetailsViewComponent', () => {
  let component: GradeDetailsViewComponent;
  let fixture: ComponentFixture<GradeDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
