import { Component, Input } from '@angular/core';
import { Routes, Route } from '../interfaces/Route'

@Component({
  selector: 'app-routes-view',
  templateUrl: './routes-view.component.html',
  styleUrls: ['./routes-view.component.scss']
})
export class RoutesViewComponent {

  showMap: boolean = true;
  @Input() routes: Routes;
  @Input() selectedRoute: Route;

  onRoutesLoad(routes: Routes) {
    this.routes = routes;
    this.selectedRoute = routes[0];
  }

  onRouteSelect(selectedRoute: Route) {
    this.selectedRoute = selectedRoute;
  }
}
