import {environment} from "../../../environments/environment";
import {Functionality} from "../models/functionality.model";

/* functionalities list */
export const functionalitiesList: Functionality[] = [
  {
    dataUrl: `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${environment.nytApiKey}`,
    contentType: 'articles',
    name: 'Top Stories',
    url: 'articles',
    imageUrl: 'assets/stack.jpg',
    isReady: true
  },
  {
    dataUrl: '',
    contentType: 'weather',
    name: 'Weather Forecast',
    url: 'weather',
    imageUrl: 'assets/weather.jpg',
    isReady: false
  },
  {
    dataUrl: '',
    contentType: 'stocks',
    name: 'Stocks Info',
    url: 'stocks',
    imageUrl: 'assets/stocks.jpg',
    isReady: false
  },
  {
    dataUrl: '',
    contentType: 'results',
    name: 'Live Results',
    url: 'results',
    imageUrl: 'assets/sports.jpg',
    isReady: false
  }
]

/* pagination options */
export const paginationOptions = {
  pageSize: 9,
  pageSizeOptions: [6,9,12],
  defaultLength: 30
}

/* variables used in userReactionForm */
export const UsernameDefault = 'anonymous';
export enum DidYouReadOptions {
  yes = 'Yes',
  no = 'No',
  tldr = 'TLDR(Too Long Didn\'t Read)',
  notOpened = 'Didn\'t even opened the link'
}
export const DidYouReadOptionsDefaultAnswer = DidYouReadOptions.no;
export const ResidenceOptions = ['no', 'yes'];
export const ResidenceDefault = 'no';
export const YourThoughtsDefault = '';
