import { TestBed } from '@angular/core/testing';

import { VocabModalService } from './vocab-modal.service';

describe('VocabModalService', () => {
  let service: VocabModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
