import {Injectable} from "@angular/core";
import {IContent} from "../../shared/models/icontent.model";
import {RequestsService} from "./requests.service";
import {FunctionalitiesListService} from "./functionalities-list.service";
import {Observable, shareReplay, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private requestsService: RequestsService,
              private functionalities: FunctionalitiesListService) {
  }

  isLoaded: boolean = false;
  loaded$!: Observable<IContent[]>;

  passLoadedData() {
    if(!this.isLoaded) {
      return this.getContentIfArrayIsEmpty();
    } else {
      return this.loaded$;
    }
  }

  getContentIfArrayIsEmpty() {
    return this.loaded$ = this.requestsService.
    getContentData(
      this.functionalities.selectFunctionality(this.functionalities.selectedFunctionality).dataUrl!
    ).
    pipe(
      shareReplay(1),
      tap(() => {
        this.isLoaded = true;
      })
    );
  }
}

export const UsernameDefault = 'anonymous';
export const DidYouReadDefault = 'no';
export const DidYouReadOptions: string[][] = [
  ['yes', 'Yes'],
  ['no', 'No'],
  ['tldr', 'TLDR'],
  ['noOpen', 'Didn\'t even opened the link'],
];
export const ResidenceDefault = 'no';
export const ResidenceOptions = ['yes', 'no'];
export const YourThoughtsDefault = '';
