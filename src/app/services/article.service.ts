import { Injectable } from '@angular/core';
import { sample_article } from 'src/data';
import { Article } from '../shared/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getAll():Article[]{
    return sample_article;
  }

  getAllArticleBySearchTerm(searchTerm:string){
    
    return this.getAll().filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
