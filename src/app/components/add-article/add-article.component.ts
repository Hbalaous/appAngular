import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  myArticle: Article;
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  addArticle(data) {
    
    if(data.invalid) {
      alert('please check your data on Form !')
      return;
    }

    this.articleService.persist(data.value)
         .subscribe(data => this.router.navigate(['/articles']))
  }

  log(data) {
    console.log(data)
  }

}
