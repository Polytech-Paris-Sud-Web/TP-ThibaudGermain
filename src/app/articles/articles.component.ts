import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ArticleHttpRestSource} from '../services/article/article-http-rest-source.service';
import {ArticleSource} from '../services/article/article.source';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];

  constructor(
    private articleSource: ArticleSource
  ) {}

  ngOnInit() {
    this.updateArticles('');
  }

  public updateArticles(value: string): void {
    this.articleSource.getArticles(value).subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  public delete(article: Article): void {
    this.articleSource.deleteArticle(article.id).subscribe(() => {
      const index = this.articles.findIndex(a => a.id === article.id);
      this.articles.splice(index, 1);
    });
  }
}
