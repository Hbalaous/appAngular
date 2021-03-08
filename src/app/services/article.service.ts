import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlApi = "http://localhost:3000/articles"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Article[]>(this.urlApi)
  }

  persist(data: Article) {
    return this.http.post<Article>(this.urlApi, data);
  }
}
