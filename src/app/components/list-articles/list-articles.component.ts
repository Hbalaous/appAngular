import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  listArticles: Article[] = []

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAllArticle()
    
  }

  getAllArticle() {
    this.articleService.getAll()
                       .subscribe(articles => {
                         this.listArticles = articles
                         console.log(this.listArticles)
                        })
  }

}
