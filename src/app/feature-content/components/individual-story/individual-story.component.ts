import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute} from "@angular/router";
import {IContent} from "../../models/icontent.model";
import {Observable} from "rxjs";

/* content item's individual component displayed after it its chosen in the list of content items */

@Component({
  selector: 'app-individual-story',
  templateUrl: './individual-story.component.html',
  styleUrls: ['./individual-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualStoryComponent implements OnInit {
  constructor(private dataService: ContentDataService, private activatedRoute: ActivatedRoute) {
  }

  id = this.activatedRoute.snapshot.params['id'];
  loaded$!: Observable<IContent[]>;

  ngOnInit() {
    /* loads the data through a service */
    this.loaded$ = this.dataService.passLoadedData();
  }
}
