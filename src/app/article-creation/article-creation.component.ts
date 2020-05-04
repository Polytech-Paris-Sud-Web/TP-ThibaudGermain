import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleHttpRestSource} from '../services/article/article-http-rest-source.service';
import {Article} from '../models/article';
import {Router} from '@angular/router';
import {ArticleSource} from '../services/article/article.source';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent {

  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleSource: ArticleSource,
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
    this.articleSource.createArticle(newArticle).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
