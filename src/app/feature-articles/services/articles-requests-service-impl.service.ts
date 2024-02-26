import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {delay, map, Observable, Subject} from "rxjs";
import {UserReaction} from "../../feature-content/models/user-reaction.model";
import {IContent} from "../../feature-content/models/icontent.model";
import {RequestsService} from "../../feature-content/interfaces/requests-service.interface";
import {Content} from "../../feature-content/models/content.model";
import {environment} from "../../../environments/environment";

export class Article extends Content {
  constructor(title: string, link: string, abstract: string, image: string, public uri: string) {
    super(title, link, abstract, image);
    this.uri = uri;
  }
}

/* Implementation of service based on interface that is part of the feature-content module.
It downloads the data, converts it to desired form, posts data to Firebase and outputs the array that is being stored in
Firebase in console. This implementation is made for Article functionality. */
@Injectable()
export class ArticlesRequestsServiceImpl implements RequestsService {
  constructor(private http: HttpClient) {
  }

  reactionsUrl = environment.reactionsUrl;

  private userReactionsSubject = new Subject<void>();

  public formSubmitted$ = this.userReactionsSubject.asObservable();

  formSubmission() {
    this.userReactionsSubject.next();
  }

  /* method outputting an array of UserReaction objects to console */
  getUserReactions(id: number, content: Article[]) {
    return this.http.get(this.reactionsUrl).pipe(map(data => {
      const reactions = Object.values(data);
      const matchedReactions = [];
      const unmatchedReactions = [];
      for (let i = reactions.length - 1; i >= 0; i--) {
        /* latest reactions on the current article  */
        if(reactions[i][0]['uri'] === content[id]['uri']) {
          matchedReactions.push(reactions[i]);
        }
        /* latest reactions that are not on the current article  */
        else if(unmatchedReactions.length < 3
          // && reactions[i][0]['uri'] !== content[id]['uri']
        ) {
          unmatchedReactions.push(reactions[i]);
        }
      }
      return [matchedReactions, unmatchedReactions];
    }))
  }

  /* method that converts the response to array of Article objects */
  getArticles(res: {[key: string]: unknown}): Article[] {
    let articlesArray: Article[] = [];

    if (Array.isArray(res['results'])) {
      const sizeOfPage = res['results'].length;
      for (let i = 0; i < sizeOfPage; i++) {
        let articleObject: {[key: string]: unknown} = res['results'][i];

        if (
          articleObject['title'] &&
          articleObject['multimedia'] &&
          Array.isArray(articleObject['multimedia'])
        ) {
          let img: string = articleObject['multimedia'][+'1']['url'];
          if (
            typeof articleObject['title'] === 'string' &&
            typeof articleObject['abstract'] === 'string' &&
            typeof articleObject['url'] === 'string' &&
            typeof articleObject['uri'] === 'string'
          ) {
            let article: Article = {
              title: articleObject['title'],
              abstract: articleObject['abstract'],
              link: articleObject['url'],
              image: img,
              uri: articleObject['uri']
            };
            articlesArray.push(article);
          }
        }
      }
    }

    return articlesArray;
  }

  /* method that downloads the data */
  getContentData(url: string): Observable<any> {
    /* delay() is used in order to make the loading spinner visible for a longer time  */
    return this.http.get<{}>(url).pipe(delay(1000),map(data => this.getArticles(data)));
  }

  /* method that posts an UserReaction object to FireBase */
  postRequest(content: IContent, userReaction: UserReaction) {
    return this.http.post(this.reactionsUrl, [content, userReaction]);
  }
}
