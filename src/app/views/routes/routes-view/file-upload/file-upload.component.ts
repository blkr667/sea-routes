import { Component, EventEmitter, Output } from '@angular/core';
import { CsvFileReaderService } from './services/csv-file-reader.service';
import { Routes } from '../../interfaces/Route'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  message: string;
  fileName: string;

  @Output() loadedRoutes = new EventEmitter<Routes>();

  constructor(private csvFileReaderService: CsvFileReaderService) { }

  loadFile(files) {
    if (files.length === 0)
      return;
    this.fileName = files[0].name;
    var mimeType = files[0].type;
    if (mimeType !== "application/vnd.ms-excel") {
      this.message = "Only csv files supported.";
    } else {
      this.message = null;
      this.csvFileReaderService.readRoutesFile(files[0], (routes) => this.loadedRoutes.emit(routes));
    }
  }
}