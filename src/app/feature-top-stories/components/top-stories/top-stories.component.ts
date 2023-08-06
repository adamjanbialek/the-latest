import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IContent} from "../../../shared/models/icontent.model";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopStoriesComponent {
  constructor(public dataService: DataService, private cdr: ChangeDetectorRef,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  type = this.activatedRoute.snapshot.paramMap.get('type')!;
  loadedContent!: IContent[];

  getContent() {
    if(this.dataService.loadedContent.length === 0) this.dataService.getContentIfArrayIsEmpty().
    subscribe({
      next: res => {
        this.loadedContent = this.dataService.loadedContent = res;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit() {
    this.getContent();
  }

  toContentItem(i: number) {
    this.router.navigate(['/content/', this.type, i]);
  }
}
