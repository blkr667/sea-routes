import { Injectable } from '@angular/core';
import { Routes, Route, RoutePoint } from '../../../interfaces/Route'
@Injectable({
  providedIn: 'root'
})

export class RouteParserService {
  parseRoutes(jsonRoutes: any[]): Routes {
    return jsonRoutes.map(routeAsArray => this.parseRoute(routeAsArray));
  }

  private parseRoute(routeAsArray: (any)[]): Route {
    return {
      id: routeAsArray[0],
      fromPort: routeAsArray[1],
      toPort: routeAsArray[2],
      duration: parseInt(routeAsArray[3]),
      points: routeAsArray[4].map(this.parsePoint)
    }
  }

  private parsePoint(pointAsArray: any[]): RoutePoint {
    return {
      longtitude: pointAsArray[0],
      latitude: pointAsArray[1],
      timestamp: pointAsArray[2],
      speed: pointAsArray[3]
    }
  }
}