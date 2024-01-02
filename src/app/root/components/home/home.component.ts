import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FunctionalitiesListService} from "../../../core/services/functionalities-list.service";
import {Router} from "@angular/router";
import {Functionality} from "../../../core/models/functionality.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private functionalities: FunctionalitiesListService, private router: Router) {
  }

  functionalitiesReady: Functionality[] = [];
  functionalitiesComingSoon: Functionality[] = [];

  ngOnInit() {
    this.functionalitiesReady = this.functionalities.readyFunctionalities;
    this.functionalitiesComingSoon = this.functionalities.comingSoonFunctionalities;
  }

  goToFunctionality(url: string) {
    this.router.navigate(['content',url]);
  }
}
