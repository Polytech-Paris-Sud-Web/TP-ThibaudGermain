import { TestBed, inject } from '@angular/core/testing';

import { ArticleHttpRestSource } from './article-http-rest-source.service';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleHttpRestSource]
    });
  });

  it('should be created', inject([ArticleHttpRestSource], (service: ArticleHttpRestSource) => {
    expect(service).toBeTruthy();
  }));
});
