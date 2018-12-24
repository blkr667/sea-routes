import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedChangesGraphComponent } from './speed-changes-graph.component';

describe('SpeedChangesGraphComponent', () => {
  let component: SpeedChangesGraphComponent;
  let fixture: ComponentFixture<SpeedChangesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedChangesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedChangesGraphComponent);
    component = fixture.componentInstance;
    fixture.debugElement.componentInstance.selectedRoute = {
      id: 1,
      fromPort: "DEHAM",
      toPort: "DEMUN",
      duration: 123,
      points: [{}]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
