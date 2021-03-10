import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
    
    articleForm: FormGroup;

    articleToEdit: Article;

  constructor(
                private articleService: ArticleService, 
                private route: ActivatedRoute,
                private router: Router
            ) {
    
    this.articleForm = new FormGroup({
          title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
          content: new FormControl(null, [Validators.required, Validators.minLength(20)]),
          category: new FormControl(null),
          active: new FormControl(true)
      })
  }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.loadOneArticle(params.id)
      })
  }

  loadOneArticle(id: number) {
      this.articleService.getOne(id).subscribe((article: Article) => {
          this.articleToEdit = article
          this.articleForm.patchValue(article)
      }) 
  }

  checkForm() {
    if(this.articleForm.invalid) {
        return;
    }
    this.updateArticle();
  }

  updateArticle() {
      this.articleService.update(this.articleToEdit.id, this.articleForm.value)
          .subscribe(data => {
              this.router.navigateByUrl('/articles')
          })
  }

  dumpData() {
      let fake = {
          title: 'Salam',
          content: 'my content',
          active: true
      }

      this.articleForm.patchValue(fake)
  }

}
