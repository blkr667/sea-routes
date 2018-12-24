import { TestBed } from '@angular/core/testing';
import { RouteParserService } from './route-parser.service';

describe('RouteParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteParserService = TestBed.get(RouteParserService);
    expect(service).toBeTruthy();
  });
});
