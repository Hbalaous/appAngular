import { HomeArticleComponent } from './components/home-article/home-article.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  {path: 'articles', loadChildren: () => import ('./marticle/marticle.module').then(m => m.MarticleModule)},
  { path: 'auth', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
