import {ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FunctionalitiesListService} from "../../../core/services/functionalities-list.service";

/* container component of the selected functionality */

@Component({
  selector: 'app-top-stories-home',
  templateUrl: './top-stories-home.component.html',
  styleUrls: ['./top-stories-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopStoriesHomeComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute, private functionalities: FunctionalitiesListService) {
  }

  ngOnInit() {
    /* gets the data passed through routing(which functionality was selected) to store its value in a service */
    this.functionalities.selectedFunctionality = this.activatedRoute.snapshot.data['functionality'];
  }

}
