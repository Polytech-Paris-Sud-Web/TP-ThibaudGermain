import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ArticleService} from '../services/article/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.updateArticles('');
  }

  public updateArticles(value: string): void {
    this.articleService.getArticles(value).subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  public delete(article: Article): void {
    this.articleService.deleteArticle(article.id).subscribe(() => {
      const index = this.articles.findIndex(a => a.id === article.id);
      this.articles.splice(index, 1);
    });
  }
}
