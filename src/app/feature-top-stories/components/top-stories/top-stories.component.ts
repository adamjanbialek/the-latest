import { Component } from '@angular/core';
import {RequestsService} from "../../../core/services/requests.service";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent {
  articlesToDisplay: Article[] = [];


  constructor(private requestsService: RequestsService) {
  }

  getArticles() {
    this.requestsService.getRequest('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xiE45x0Ko9i4PoeHRqEU9rGDYWi4AGjI').subscribe({
      next: res => this.articlesToDisplay = res
    });
  }

  ngOnInit() {
    this.getArticles();
  }
}
