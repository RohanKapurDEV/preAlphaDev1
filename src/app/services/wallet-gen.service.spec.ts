import { TestBed } from '@angular/core/testing';

import { WalletGenService } from './wallet-gen.service';

describe('WalletGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletGenService = TestBed.get(WalletGenService);
    expect(service).toBeTruthy();
  });
});
