import {IContent} from "./icontent.model";

export class Content implements IContent {
  constructor(public title: string, public link: string, public abstract: string, public image: string) {}
}
