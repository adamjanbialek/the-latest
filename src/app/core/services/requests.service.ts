import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {Article} from "../../feature-top-stories/models/article.model";
import {UserReaction} from "../../shared/models/user-reaction.model";
import {IContent} from "../../shared/models/icontent.model";

@Injectable({
  providedIn: "root"
})
export class RequestsService {
  constructor(private http: HttpClient) {
  }

  firebaseUrl = 'https://test-project-f9414-default-rtdb.firebaseio.com/articles.json';

  getFromFirebase() {
    return this.http.get(this.firebaseUrl).subscribe({
      next: res => console.log(res),
    })
  }

  private transformResponse(res: {[key: string]: unknown}): Article[] {
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
    return this.http.get<{}>(url).pipe(map(this.transformResponse));
  }


  postRequest(content: IContent, userReaction: UserReaction) {
    return this.http.post(this.firebaseUrl, [content, userReaction]);
  }
}
