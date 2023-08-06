import {Injectable} from "@angular/core";
import {IContent} from "../../shared/models/icontent.model";
import {RequestsService} from "./requests.service";
import {FunctionalitiesListService} from "./functionalities-list.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private requestsService: RequestsService,
              private functionalities: FunctionalitiesListService) {
  }

  loadedContent: IContent[] = [];
  contentTypes: IContent[] = [];
  selectedContentItem: IContent = {title: '', abstract: '', link: '', image: ''};

  getContentIfArrayIsEmpty() {
    return this.requestsService.
    getContentData(this.functionalities.selectFunctionality(this.functionalities.selectedFunctionality).dataUrl!);
  }
}
