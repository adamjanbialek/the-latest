import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs";
import {Article} from "../../feature-top-stories/models/article.model";
import {UserReaction} from "../../shared/models/user-reaction.model";
import {Content} from "../../shared/models/content.model";

@Injectable({
  providedIn: "root"
})
export class RequestsService {
  constructor(private http: HttpClient) {
  }

  firebaseUrl = 'https://ng-complete-guide-5e2dd.firebaseio.com/articles.json';

  getRequest(url: string) {
    return this.http.get<{}>(url).pipe(map(
      (res: {[key: string] : unknown}) => {
        let articlesArray: Article[] = [];

        if(Array.isArray(res['results'])) {
          for (const resItem in res['results']) {
            let articleObject: {[key: string]: unknown} = res['results'][resItem];

            if(articleObject['title'] && articleObject['multimedia'] && Array.isArray(articleObject['multimedia'])) {
              let img: string = articleObject['multimedia'][+'1']['url'];
              if(typeof articleObject['title'] === 'string' && typeof articleObject['abstract'] === 'string'
                && typeof articleObject['url'] === 'string') {
                let article: Article = {
                  title: articleObject['title'],
                  abstract: articleObject['abstract'],
                  link: articleObject['url'],
                  image: img};
                articlesArray.push(article);
              }
            }
          }
        }

        return articlesArray;
      }
    ))
  }

  postRequest(content: Content, userReaction: UserReaction) {
    return this.http.post(this.firebaseUrl, [content, userReaction]);
  }
}
