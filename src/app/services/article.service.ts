import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlApi = `${environment.domainName}/articles`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Article[]>(this.urlApi)
  }

  getOne(id: number) {
    return this.http.get<Article>(`${this.urlApi}/${id}`)
  }

  persist(data: Article) {
    return this.http.post<Article>(this.urlApi, data);
  }

  update(id: number, data: Article){
    return this.http.put(`${this.urlApi}/${id}`,data)
  }
}
