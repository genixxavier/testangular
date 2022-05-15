import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

let ValueServiceStub = {
  getValue: () => 'ss',
};

describe('MasterService', () => {
  let service: MasterService;
  let valueServiceSpy: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ValueService,
          useValue: ValueServiceStub,
        },
      ],
    });
    service = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService);
  });

  it('should be created with mock useValue', () => {
    expect(service).toBeTruthy();
    let dd = service.getValue();
    expect(dd).toBe('ss');
  });

  it('should return my value from the real service', () => {
    const fake = { getValue: () => 'fake' };
    const val = new MasterService(fake as ValueService);
    expect(val.getValue()).toBe('fake');
  });

  it('should call to getValue from ValueService', () => {
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    valueServiceSpy.getValue.and.returnValue('fake value');
    const masterService = new MasterService(valueServiceSpy);
    expect(masterService.getValue()).toBe('fake value'); // ok
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });

  it('should call to getValue "Gnxcode" from ValueService ', () => {
    spyOn(valueServiceSpy, 'getValue').and.returnValue('Gnxcode');

    expect(service.getValue()).toBe('Gnxcode'); // ok
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});
