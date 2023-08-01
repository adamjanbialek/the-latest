import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs";
import {Article} from "../../feature-top-stories/models/article.model";
import {UserReaction} from "../../shared/models/user-reaction.model";

@Injectable({
  providedIn: "root"
})
export class RequestsService {
  constructor(private http: HttpClient) {
  }

  firebaseUrl = 'https://ng-complete-guide-5e2dd.firebaseio.com/articles.json';

  getRequest(url: string) {
    return this.http.get<{}>(url).pipe(map(
      (res: {[key: string] : {[key: string]: {}}}) => {
        let postsArray: Article[] = [];

        for (const articleData in res['results']) {
          console.log(res);
          let obj: {[key: string]: string} = res['results'][articleData];
          let img = '';
          if(obj['multimedia'] !== null) {
            let image: {[key: number]: string} = obj['multimedia'][+'1'];
            for (let key in image) (key === 'url') ? img = image[key] : '';
          } else {
            continue;
          }

          let article: Article = {title: obj['title'], abstract: obj['abstract'], link: obj['url'], image: img};
          if(article.title !== '') {
            postsArray.push(article);
          }
        }

        return postsArray;
      }
    ))
  }

  postRequest(article: Article, userReaction: UserReaction) {
    return this.http.post(this.firebaseUrl, [article, userReaction]);
  }
}
