import { TestBed } from '@angular/core/testing';

import { KnotToColorMappingService } from './knot-to-color-mapping.service';

describe('KnotToColorMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnotToColorMappingService = TestBed.get(KnotToColorMappingService);
    expect(service).toBeTruthy();
  });

  it('should generate red color for low speed', () => {
    const service: KnotToColorMappingService = TestBed.get(KnotToColorMappingService);

    const color = service.getColor(0);

    expect(color).toEqual('rgb(255, 0, 0)');
  });

  it('should generate green color for high speed', () => {
    const service: KnotToColorMappingService = TestBed.get(KnotToColorMappingService);

    const color = service.getColor(30);

    expect(color).toEqual('rgb(0, 255, 0)');
  });

  it('should generate yellow color for medium speed', () => {
    const service: KnotToColorMappingService = TestBed.get(KnotToColorMappingService);

    const color = service.getColor(15);

    expect(color).toEqual('rgb(255, 255, 0)');
  });

  it('should not fail when negative speed', () => {
    const service: KnotToColorMappingService = TestBed.get(KnotToColorMappingService);

    const color = service.getColor(-10);

    expect(color).toEqual('rgb(255, 0, 0)');
  });

  it('should not fail when ridiculously high speed', () => {
    const service: KnotToColorMappingService = TestBed.get(KnotToColorMappingService);

    const color = service.getColor(100);

    expect(color).toEqual('rgb(0, 255, 0)');
  });
});
