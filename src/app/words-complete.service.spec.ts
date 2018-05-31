import { TestBed, inject } from '@angular/core/testing';

import { WordsCompleteService } from './words-complete.service';

describe('WordsCompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsCompleteService]
    });
  });

  it('should be created', inject([WordsCompleteService], (service: WordsCompleteService) => {
    expect(service).toBeTruthy();
  }));
});
