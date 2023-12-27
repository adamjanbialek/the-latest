import {Observable} from "rxjs";
import {IContent} from "../../shared/models/icontent.model";
import {UserReaction} from "../../shared/models/user-reaction.model";

export interface RequestsService {
  firebaseUrl: string;

  getFromFirebase(): any;

  getArticles(res: any): any;

  getContentData(url: string): Observable<any>;

  postRequest(content: IContent, userReaction: UserReaction): any;
}
