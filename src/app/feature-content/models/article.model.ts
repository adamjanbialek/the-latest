import {IContent} from "../../shared/models/icontent.model";

export class Content implements IContent {
  static source = '';

  constructor(public title: string, public link: string, public abstract: string, public image: string) {}

}

export class Article implements Content {
  static source = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xiE45x0Ko9i4PoeHRqEU9rGDYWi4AGjI';

  constructor(public title: string, public link: string, public abstract: string, public image: string) {}

}
