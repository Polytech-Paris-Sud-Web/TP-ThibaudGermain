import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../services/article/article.service';
import {Article} from '../models/article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent {

  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  public createArticle() {
    const formModel = this.articleForm.value;
    const newArticle: Article = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    };
    this.articleService.createArticle(newArticle).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
