import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Routes, Route } from '../../interfaces/Route'

@Component({
  selector: 'app-select-route',
  templateUrl: './select-route.component.html',
  styleUrls: ['./select-route.component.scss']
})
export class SelectRouteComponent {
  @Input() routes: Routes;
  @Output() selectedRoute = new EventEmitter<Route>();

  selectRoute(id: number) {
    this.selectedRoute.emit(this.routes.find(route => id === route.id));
  }
}
