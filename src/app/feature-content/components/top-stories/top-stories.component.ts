import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IContent} from "../../models/icontent.model";
import {Observable} from "rxjs";

/* component that outputs all the items being stored in array to the screen */

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopStoriesComponent implements OnInit {
  constructor(public dataService: ContentDataService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  /* gets the parameter from URL(which functionality was selected) */
  type = this.activatedRoute.snapshot.paramMap.get('type')!;
  loaded$!: Observable<IContent[]>;

  ngOnInit() {
    /* loads the data through a service */
    this.loaded$ = this.dataService.passLoadedData();
  }

  /* a method that redirects to one of the items individual pages */
  toContentItem(i: number) {
    this.router.navigate(['/content/', this.type, i]);
  }
}
