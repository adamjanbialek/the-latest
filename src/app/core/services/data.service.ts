import {Article} from "../../feature-top-stories/models/article.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  articlesToDisplay: Article[] = [];
}
