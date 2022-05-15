import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService],
    });
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getObservableValue', () => {
    it('should return "my value"', (doneFn) => {
      service.getObservable().subscribe((value) => {
        expect(value).toBe('Observe value');
        doneFn();
      });
    });
  });

  describe('Test for getObservableValue Sync', () => {
    it('should return "my value"', async () => {
      const value = await service.getPromise();
      expect(value).toBe('promise value');
    });
  });
});
