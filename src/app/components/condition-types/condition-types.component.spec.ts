import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionTypesComponent } from './condition-types.component';

describe('ConditionTypesComponent', () => {
  let component: ConditionTypesComponent;
  let fixture: ComponentFixture<ConditionTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
