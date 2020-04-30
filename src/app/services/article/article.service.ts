import { Injectable } from '@angular/core';
import {Article} from '../../models/article';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticle(id: string): Observable<Article>  {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }


  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  public deleteArticle(id: string): Observable<void>  {
    return this.http.delete<void>(`http://localhost:3000/articles/${id}`);
  }

  public createArticle(newArticle): Observable<Article>  {
    return this.http.post<Article>('http://localhost:3000/articles/', newArticle);
  }
}
