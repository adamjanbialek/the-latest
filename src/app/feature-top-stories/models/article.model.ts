import {Content} from "../../shared/models/content.model";

export interface Article extends Content {
  title: string;
  abstract: string;
  link: string;
  image: string;
}
