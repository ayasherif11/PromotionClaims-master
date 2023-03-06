import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionTypeComponent } from './condition-type.component';

describe('ConditionTypeComponent', () => {
  let component: ConditionTypeComponent;
  let fixture: ComponentFixture<ConditionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
