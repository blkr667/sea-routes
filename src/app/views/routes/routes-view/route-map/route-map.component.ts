import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Route } from '../../interfaces/Route'
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { Stroke, Style } from 'ol/style.js';
import Feature from 'ol/Feature.js';
import LineString from 'ol/geom/LineString';
import { fromLonLat } from 'ol/proj';
import { KnotToColorMappingService } from './services/knot-to-color-mapping.service'

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.scss']
})
export class RouteMapComponent implements OnInit, OnChanges {
  @Input() selectedRoute: Route;
  private map: OlMap;
  private vectorLayer: VectorLayer;
  private vectorSource: VectorSource;
  constructor(private knotToColorMappingService: KnotToColorMappingService) { }

  ngOnInit() {
    this.vectorSource = new VectorSource({
      features: this.prepareLineStringFeatures(),
      wrapX: false
    });
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
    const source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });
    const mapLayer = new OlTileLayer({
      source: source
    });
    const view = new OlView({
      center: this.getStartingPointCoordinates(),
      zoom: 6
    });
    this.map = new OlMap({
      target: 'map',
      layers: [mapLayer, this.vectorLayer],
      view: view
    });
  }

  ngOnChanges(changes) {
    if (this.map) {
      this.vectorSource.clear();
      this.vectorSource.addFeatures(this.prepareLineStringFeatures());
      this.map.getView().setZoom(6);
      this.map.getView().setCenter(this.getStartingPointCoordinates());
    }
  }

  private prepareLineStringFeatures() {
    const points = this.selectedRoute.points;
    return points
      .map(point => fromLonLat([point.longtitude, point.latitude]))
      .map(
        (coordinate, index, array) => {
          if (index !== 0) {
            const lineFeature = new Feature({
              geometry: new LineString([array[index - 1], coordinate])
            });
            lineFeature.setStyle(new Style({
              stroke: new Stroke({
                color: this.knotToColorMappingService.getColor(points[index].speed),
                width: 4
              })
            }));
            return lineFeature;
          }
          return coordinate;
        }
      )
      .slice(1);
  }

  private getStartingPointCoordinates() {
    const startingPoint = this.selectedRoute.points[0];
    return fromLonLat([startingPoint.longtitude, startingPoint.latitude]);
  }
}