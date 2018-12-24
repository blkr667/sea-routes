import { TestBed } from '@angular/core/testing';
import { PapaParseModule } from 'ngx-papaparse';
import { CsvFileReaderService } from './csv-file-reader.service';

describe('CsvFileReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [PapaParseModule]
  }));

  it('should be created', () => {
    const service: CsvFileReaderService = TestBed.get(CsvFileReaderService);
    expect(service).toBeTruthy();
  });
});
