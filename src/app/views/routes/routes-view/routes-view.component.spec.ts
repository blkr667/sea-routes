import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesViewComponent } from './routes-view.component';
import { Component, Input } from '@angular/core';

describe('RoutesViewComponent', () => {
  let component: RoutesViewComponent;
  let fixture: ComponentFixture<RoutesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RoutesViewComponent,
        FileUploadMock,
        SelectRouteMock,
        SpeedChangesGraphMock,
        RouteMapMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesViewComponent);
    component = fixture.componentInstance;
    fixture.debugElement.componentInstance.routes = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route select be disabled when no routes', () => {
    fixture.debugElement.componentInstance.routes = null;
    fixture.detectChanges();

    //h1 = fixture.nativeElement.querySelector('h1');
  });

});

@Component({
  selector: 'app-file-upload',
  template: ''
})
class FileUploadMock {
}
@Component({
  selector: 'app-select-route',
  template: ''
})
class SelectRouteMock {
  @Input() routes;
}
@Component({
  selector: 'app-speed-changes-graph',
  template: ''
})
class SpeedChangesGraphMock {
  @Input() selectedRoute;
}
@Component({
  selector: 'app-route-map',
  template: ''
})
class RouteMapMock {
  @Input() selectedRoute;
}