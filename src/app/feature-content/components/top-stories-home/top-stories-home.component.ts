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
    this.functionalities.selectedFunctionality = this.activatedRoute.snapshot.paramMap.get('type')!;
  }

}
