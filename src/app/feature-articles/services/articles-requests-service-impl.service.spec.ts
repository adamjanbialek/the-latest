import {ArticlesRequestsServiceImpl} from "./articles-requests-service-impl.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {getArticlesMockResponse} from "../../core/variables/mock-db";
import {DidYouReadOptions, ResidenceDefault} from "../../core/variables/variables";

describe('RequestImpl', () => {
  let service: ArticlesRequestsServiceImpl,
  httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticlesRequestsServiceImpl],
    });

    service = TestBed.inject(ArticlesRequestsServiceImpl);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should return the articles', () => {
    const articles = service.getArticles(getArticlesMockResponse);

    expect(articles).toHaveSize(3);
    expect(articles).toBeTruthy('No articles were returned');

    const article = articles.find(article => article.uri === 'nyt://promo/4405b1dd-a907-55b3-964b-f7773cc04f36');

    expect(article?.title).toBe('Israel-Hamas War: Fighting Eases in Northern Gaza, Giving Residents Some Relief');
  });

  it('should post the userReaction to the database', () => {
    const articles = service.getArticles(getArticlesMockResponse);
    const article = articles.find(article => article.uri === 'nyt://promo/4405b1dd-a907-55b3-964b-f7773cc04f36');

    service.postRequest(article!,{username: 'anonymu',
      yourThoughts: 'concerning',
      residence: ResidenceDefault,
      didYouRead: DidYouReadOptions.tldr
    }).subscribe(data => expect(data).toBeTruthy());

    const req = httpTestingController.expectOne(req => req.url === 'https://ng-complete-guide-5e2dd.firebaseio.com/articles.json');
    expect(req.request.method).toEqual('POST');
    req.flush({}, {status: 200, statusText: 'created'});
  });

  afterEach(() => {
    httpTestingController.verify();
  })
});
