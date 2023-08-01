import { Component } from '@angular/core';
import {RequestsService} from "../../../core/services/requests.service";
import {DataService} from "../../../core/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent {
  constructor(private requestsService: RequestsService, public dataService: DataService, public router: Router) {
  }

  getArticles() {
    if(this.dataService.articlesToDisplay.length === 0) this.requestsService.getRequest('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xiE45x0Ko9i4PoeHRqEU9rGDYWi4AGjI').subscribe({
      next: res => this.dataService.articlesToDisplay = res
    });
  }

  ngOnInit() {
    this.getArticles();
  }

  toArticle(i: number) {
    this.router.navigate(['/top-stories', i]);
  }
}
