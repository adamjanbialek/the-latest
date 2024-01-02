import {Observable} from "rxjs";
import {IContent} from "../models/icontent.model";
import {UserReaction} from "../models/user-reaction.model";

export interface RequestsService {
  reactionsUrl: string;

  getFromFirebase(): any;

  getArticles(res: any): any;

  getContentData(url: string): Observable<any>;

  postRequest(content: IContent, userReaction: UserReaction): any;
}
