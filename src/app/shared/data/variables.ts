/* variables used in userReactionForm */
export const UsernameDefault = 'anonymous';
export enum DidYouReadOptions {
  yes = 'Yes',
  no = 'No',
  tldr = 'TLDR',
  notOpened = 'Didn\'t even opened the link'
}
export const DidYouReadOptionsDefaultAnswer = DidYouReadOptions.no;
export const ResidenceOptions = ['no', 'yes'];
export const ResidenceDefault = 'no';
export const YourThoughtsDefault = '';

/* variables used in implementation of dataService */
export enum firebaseUrls {
  articlesUrl = 'https://test-project-f9414-default-rtdb.firebaseio.com/articles.json'
}
