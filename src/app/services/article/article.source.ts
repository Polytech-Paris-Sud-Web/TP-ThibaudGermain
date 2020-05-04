import { Injectable } from '@angular/core';
import {Article} from '../../models/article';
import {Observable} from 'rxjs';

@Injectable()
export abstract class ArticleSource {
  abstract getArticle(id: string): Observable<Article>;

  abstract getArticles(filter?: string): Observable<Article[]>;

  abstract deleteArticle(id: string): Observable<void>;

  abstract createArticle(newArticle): Observable<Article>;
}
