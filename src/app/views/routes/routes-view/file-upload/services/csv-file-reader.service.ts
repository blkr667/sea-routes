import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { RouteParserService } from './route-parser.service';

@Injectable({
  providedIn: 'root'
})
export class CsvFileReaderService {
  constructor(private papa: Papa, private routeParserService: RouteParserService) { }

  readRoutesFile(file, fileReadedCallback) {
    this.papa.parse(file, {
      complete: (result) => {
        const jsonRoutes = this.prepareJsonRoutes(result.data);
        fileReadedCallback(this.routeParserService.parseRoutes(jsonRoutes));
      }
    });
  }

  private prepareJsonRoutes(resultData) {
    return resultData
      .filter((row, index) => index !== 0 && row.length && row.length === 5)
      .map(row => {
        row[4] = JSON.parse(row[4]);
        return row;
      });
  }
}