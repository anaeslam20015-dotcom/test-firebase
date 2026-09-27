import { TestBed } from '@angular/core/testing';

import { StoreServiecsService } from './store.serviecs.service';

describe('StoreServiecsService', () => {
  let service: StoreServiecsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreServiecsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
