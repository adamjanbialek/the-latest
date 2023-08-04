import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {RequestsService} from "../../../core/services/requests.service";
import {DataService} from "../../../core/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopStoriesComponent {
  constructor(private cdr: ChangeDetectorRef, private requestsService: RequestsService, public dataService: DataService, private router: Router) {
  }

  getArticles() {
    if(this.dataService.articlesToDisplay.length === 0) this.requestsService.getArticleData('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xiE45x0Ko9i4PoeHRqEU9rGDYWi4AGjI').subscribe({
      next: res => {
        this.dataService.articlesToDisplay = res;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit() {
    this.getArticles();
  }

  toArticle(i: number) {
    this.router.navigate(['/top-stories', i]);
  }
}
