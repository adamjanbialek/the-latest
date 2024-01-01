import {IContent} from "./icontent.model";
import {ContentSource} from "../../core/variables/variables";

export class Content implements IContent {
  static source = '';

  constructor(public title: string, public link: string, public abstract: string, public image: string) {}

}

export class Article implements Content {
  static source = ContentSource.articlesDataUrl;

  constructor(public title: string, public link: string, public abstract: string, public image: string) {}

}
