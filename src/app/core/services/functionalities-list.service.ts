import {Injectable} from "@angular/core";
import {functionalitiesList} from "../variables/variables";
import {Functionality} from "../models/functionality.model";
import {Router} from "@angular/router";

/* a services that stores data about functionalities, sorts by their status(whether they are ready for use or not) */

@Injectable()
export class FunctionalitiesListService {
  selectedFunctionality = '';

  constructor(private router: Router) {
  }

  /* a method that verifies existence of Functionality(that is a part of URL) and redirects to Home Page if it doesn't find a match */
  selectFunctionality(contentType: string): Functionality | void {
    for (let functionality of this.functionalitiesArray) {
      if(functionality.contentType === contentType) {
        return functionality;
      }
    }

    this.router.navigate(['']);
  }

  readyArray: Functionality[] = [];
  comingSoonArray: Functionality[] = [];

  sortFunctionalitiesByReadiness() {
    if(!this.readyArray.length && !this.comingSoonArray.length) {
      for (const item of this.functionalitiesArray) {
        item.isReady ? this.readyArray.push(item) : this.comingSoonArray.push(item);
      }
    }
  }

  get readyFunctionalities() {
    this.sortFunctionalitiesByReadiness();
    return this.readyArray;
  }

  get comingSoonFunctionalities() {
    this.sortFunctionalitiesByReadiness();
    return this.comingSoonArray;
  }

  functionalitiesArray: Functionality[] = [...functionalitiesList];
}
