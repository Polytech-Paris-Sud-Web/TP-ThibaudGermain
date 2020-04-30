import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ArticleService} from '../services/article/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  public delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(() => {
      const index = this.articles.findIndex(a => a.id === article.id);
      this.articles.splice(index, 1);
    });
  }
}
