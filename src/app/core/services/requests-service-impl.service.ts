import {HttpClient} from "@angular/common/http";
import {Injectable, InjectionToken} from "@angular/core";
import {map, Observable} from "rxjs";
import {Article} from "../../feature-top-stories/models/article.model";
import {UserReaction} from "../../shared/models/user-reaction.model";
import {IContent} from "../../shared/models/icontent.model";
import {RequestsService} from "../../feature-top-stories/interfaces/requests-service.interface";
import {firebaseUrls} from "../../shared/data/variables";

export const REQUEST_SERVICE_IMPL = new InjectionToken<RequestsService>('RequestsService');

@Injectable()
export class RequestsServiceImpl implements RequestsService {
  constructor(private http: HttpClient) {
  }

  firebaseUrl = firebaseUrls.articlesUrl;

  getFromFirebase() {
    return this.http.get(this.firebaseUrl).subscribe({
      next: res => console.log(res),
    })
  }

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

  getContentData(url: string): Observable<any> {
    return this.http.get<{}>(url).pipe(map(this.getArticles));
  }


  postRequest(content: IContent, userReaction: UserReaction) {
    return this.http.post(this.firebaseUrl, [content, userReaction]);
  }
}
