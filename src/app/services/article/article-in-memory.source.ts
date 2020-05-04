import { Injectable } from '@angular/core';
import {Article} from '../../models/article';
import {Observable} from 'rxjs';
import {ArticleSource} from './article.source';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class ArticleInMemorySource implements ArticleSource {
  constructor(private articles: Article[] = []) {
  }
  public getArticle(id: string): Observable<Article>  {
    const article = this.articles.find(_ => _.id === id);
    if (article) {
      return of(article);
    } else {
      throw new Error(`Article not found for id ${id}`);
    }
  }

  public getArticles(filter?: string): Observable<Article[]> {
    return of(this.articles);
  }

  public deleteArticle(id: string): Observable<void>  {
    this.articles = this.articles.filter(_ => _.id !== id);
    return of(undefined);
  }

  public createArticle(rawArticle: Article): Observable<Article>  {
    const newArticle: Article = {
      id: (this.articles.length).toString(),
      title: rawArticle.title,
      content: rawArticle.content,
      authors: rawArticle.authors
    };
    this.articles.push(newArticle);
    return of(newArticle);
  }
}
