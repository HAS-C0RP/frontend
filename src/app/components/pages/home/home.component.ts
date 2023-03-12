import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/shared/models/Article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles:Article[] = []
  constructor(private articleService:ArticleService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      this.articles = this.articleService.getAllArticleBySearchTerm(params.searchTerm);
      else
      this.articles = articleService.getAll();
    })

  }

  ngOnInit(): void {

  }
}
