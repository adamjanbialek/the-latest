import { Component } from '@angular/core';
import {FunctionalitiesListService} from "../../../core/services/functionalities-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public functionalitiesList: FunctionalitiesListService) {
  }
}
