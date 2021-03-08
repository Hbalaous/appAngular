import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  article: Article = {
    title: '',
    content: ''
  }
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
       
      this.route.params.subscribe(param => 
        this.articleService.getOne(param.id)
                           .subscribe(article => this.article = article)
      )

  }



}
