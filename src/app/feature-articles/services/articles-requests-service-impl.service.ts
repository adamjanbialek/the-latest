import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {delay, map, Observable} from "rxjs";
import {UserReaction} from "../../feature-content/models/user-reaction.model";
import {IContent} from "../../feature-content/models/icontent.model";
import {RequestsService} from "../../feature-content/interfaces/requests-service.interface";
import {Content} from "../../feature-content/models/content.model";
import {environment} from "../../../environments/environment";

export class Article extends Content {}

/* Implementation of service based on interface that is part of the feature-content module.
It downloads the data, converts it to desired form, posts data to Firebase and outputs the array that is being stored in
Firebase in console. This implementation is made for Article functionality. */
@Injectable()
export class ArticlesRequestsServiceImpl implements RequestsService {
  constructor(private http: HttpClient) {
  }

  reactionsUrl = environment.reactionsUrl;

  /* method outputting an array of UserReaction objects to console */
  getFromFirebase() {
    return this.http.get(this.reactionsUrl).subscribe({
      next: res => console.log(res),
    })
  }

  /* method that converts the response to array of Article objects */
  getArticles(res: {[key: string]: unknown}): Article[] {
    let articlesArray: Article[] = [];

    if (Array.isArray(res['results'])) {
      for (const resItem in res['results']) {
        let articleObject: {[key: string]: unknown} = res['results'][resItem];

        if (
          articleObject['title'] &&
          articleObject['multimedia'] &&
          Array.isArray(articleObject['multimedia'])
        ) {
          let img: string = articleObject['multimedia'][+'1']['url'];
          if (
            typeof articleObject['title'] === 'string' &&
            typeof articleObject['abstract'] === 'string' &&
            typeof articleObject['url'] === 'string'
          ) {
            let article: Article = {
              title: articleObject['title'],
              abstract: articleObject['abstract'],
              link: articleObject['url'],
              image: img,
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
    return this.http.get<{}>(url).pipe(delay(1000),map(this.getArticles));
  }

  /* method that posts an UserReaction object to FireBase */
  postRequest(content: IContent, userReaction: UserReaction) {
    return this.http.post(this.reactionsUrl, [content, userReaction]);
  }
}
