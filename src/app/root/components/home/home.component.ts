import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FunctionalitiesListService} from "../../../core/services/functionalities-list.service";
import {Router} from "@angular/router";
import {Functionality} from "../../../core/models/functionality.model";

/* component that outputs the list of the functionalities */
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

  /* arrays splitting functionalities according to whether they are ready for use or not  */
  ngOnInit() {
    this.functionalitiesReady = this.functionalities.readyFunctionalities;
    this.functionalitiesComingSoon = this.functionalities.comingSoonFunctionalities;
  }

  /* method that redirects to chosen functionality(if its property isReady is set to true) */
  goToFunctionality(url: string) {
    this.router.navigate(['content',url]);
  }
}
