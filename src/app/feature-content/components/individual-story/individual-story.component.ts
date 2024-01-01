import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute} from "@angular/router";
import {IContent} from "../../../shared/models/icontent.model";
import {Observable} from "rxjs";

/* item's individual component */

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
    /* handles the data */
    this.loaded$ = this.dataService.passLoadedData();
  }
}
