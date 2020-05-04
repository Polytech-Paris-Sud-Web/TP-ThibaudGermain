import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticleHttpRestSource} from './services/article/article-http-rest-source.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ArticleSource} from './services/article/article.source';
import {environment} from '../environments/environment';
import {ArticleInMemorySource} from './services/article/article-in-memory.source';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: '', component: ArticlesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    {
      provide: ArticleSource,
      useFactory: (http: HttpClient) => {
        if (environment.production) {
          return new ArticleHttpRestSource(http);
        } else {
          return new ArticleInMemorySource();
        }
      },
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
