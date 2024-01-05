import {ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FunctionalitiesListService} from "../../../core/services/functionalities-list.service";
import {ContentDataService} from "../../services/content-data.service";

/* container component of the selected functionality */

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHomeComponent implements OnInit{
  constructor(public dataService: ContentDataService, private activatedRoute: ActivatedRoute, private functionalities: FunctionalitiesListService) {
  }

  ngOnInit() {
    /* gets the data passed through routing(which functionality was selected) to store its value in a service */
    this.functionalities.selectedFunctionality = this.activatedRoute.snapshot.data['functionality'];
  }

}
