import {IContent} from "./icontent.model";

export abstract class Content implements IContent {
  constructor(public title: string, public link: string, public abstract: string, public image: string) {}
}
