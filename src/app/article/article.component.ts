import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from '../models/article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input()
  article: Article;
  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    if (!this.article && this.route.snapshot.params.id) {
      this.articleService.getArticle(this.route.snapshot.params.id).subscribe(article => {
        this.article = article;
      });
    }
  }

  public delete(): void {
    this.deletedArticle.emit(this.article);
  }

  public infos() {
    this.router.navigate([`articles/${this.article.id}`]);
  }
}
