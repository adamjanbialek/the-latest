import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FunctionalitiesListService, Functionality} from "../../../core/services/functionalities-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private functionalitiesList: FunctionalitiesListService) {
  }

  functionalitiesReady: Functionality[] = [];
  functionalitiesComingSoon: Functionality[] = [];

  ngOnInit() {
    for (const functionality of this.functionalitiesList.functionalitiesArray) {
      if(functionality.isReady) {
        this.functionalitiesReady.push(functionality);
      } else {
        this.functionalitiesComingSoon.push(functionality);
      }
    }
  }
}
