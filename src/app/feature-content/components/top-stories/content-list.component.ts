import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IContent} from "../../models/icontent.model";
import {Observable} from "rxjs";

/* component that outputs all the items being stored in array to the screen */

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentListComponent implements OnInit {
  constructor(public dataService: ContentDataService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  /* gets the data passed through routing(which functionality was selected) */
  functionality = this.activatedRoute.snapshot.data['functionality'];
  loaded$!: Observable<IContent[]>;

  ngOnInit() {
    /* loads the data through a service */
    this.loaded$ = this.dataService.passLoadedData();
  }

  /* a method that redirects to one of the items individual pages */
  toContentItem(i: number) {
    this.router.navigate(['/content/', this.functionality, i]);
  }
}
