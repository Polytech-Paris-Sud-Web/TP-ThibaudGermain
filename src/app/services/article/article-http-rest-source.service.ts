import { Injectable } from '@angular/core';
import {Article} from '../../models/article';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import {ArticleSource} from './article.source';

@Injectable()
export class ArticleHttpRestSource implements ArticleSource {
  constructor(
    private http: HttpClient
  ) { }

  public getArticle(id: string): Observable<Article>  {
    return this.http.get<Article>(`${environment.jsonServerUrl}/articles/${id}`);
  }

  public getArticles(filter?: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.jsonServerUrl}/articles?q=${filter}`);
  }

  public deleteArticle(id: string): Observable<void>  {
    return this.http.delete<void>(`${environment.jsonServerUrl}/articles/${id}`);
  }

  public createArticle(newArticle): Observable<Article>  {
    return this.http.post<Article>(`${environment.jsonServerUrl}/articles/`, newArticle);
  }
}
