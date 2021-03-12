import { ResumePipe } from './../pipes/resume.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from './../services/article.service';
import { HomeArticleComponent } from './../components/home-article/home-article.component';
import { ShowArticleComponent } from './../components/show-article/show-article.component';
import { EditArticleComponent } from './../components/edit-article/edit-article.component';
import { AddArticleComponent } from './../components/add-article/add-article.component';
import { ListArticlesComponent } from './../components/list-articles/list-articles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [
    ListArticlesComponent,
    AddArticleComponent,
    EditArticleComponent,
    ShowArticleComponent,
    HomeArticleComponent,
    ResumePipe
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService]
})
export class MarticleModule { }
