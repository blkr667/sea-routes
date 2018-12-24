import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesViewComponent } from './routes-view/routes-view.component';
import { SelectRouteComponent } from './routes-view/select-route/select-route.component';
import { SpeedChangesGraphComponent } from './routes-view/speed-changes-graph/speed-changes-graph.component';
import { RouteMapComponent } from './routes-view/route-map/route-map.component';
import { FileUploadComponent } from './routes-view/file-upload/file-upload.component';
import { CsvFileReaderService } from './routes-view/file-upload/services/csv-file-reader.service';
import { RouteParserService } from './routes-view/file-upload/services/route-parser.service';
import { KnotToColorMappingService } from './routes-view/route-map/services/knot-to-color-mapping.service';
import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  declarations: [
    RoutesViewComponent,
    SelectRouteComponent,
    SpeedChangesGraphComponent,
    RouteMapComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    PapaParseModule
  ],
  exports: [
    RoutesViewComponent
  ],
  providers: [
    CsvFileReaderService,
    RouteParserService,
    KnotToColorMappingService
  ]
})
export class RoutesModule { }
