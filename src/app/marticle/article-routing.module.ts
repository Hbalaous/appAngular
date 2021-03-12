import { AuthGuard } from './../guards/auth.guard';
import { HomeArticleComponent } from './../components/home-article/home-article.component';
import { ShowArticleComponent } from './../components/show-article/show-article.component';
import { EditArticleComponent } from './../components/edit-article/edit-article.component';
import { AddArticleComponent } from './../components/add-article/add-article.component';
import { ListArticlesComponent } from './../components/list-articles/list-articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', children: [
    { path: '', component: ListArticlesComponent },
    { path: 'add', component: AddArticleComponent },
    { path: ':id/edit', component: EditArticleComponent },
    { path: ':id', component: ShowArticleComponent },
  ], component: HomeArticleComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
