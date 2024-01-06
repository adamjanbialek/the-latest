import {Observable} from "rxjs";
import {IContent} from "../models/icontent.model";
import {UserReaction} from "../models/user-reaction.model";
import {InjectionToken} from "@angular/core";

export const REQUEST_SERVICE_IMPL = new InjectionToken<RequestsService>('RequestsService');

export interface RequestsService {
  reactionsUrl: string;

  getFromFirebase(): any;

  getContentData(url: string): Observable<any>;

  postRequest(content: IContent, userReaction: UserReaction): any;
}
