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
export enum FirebaseUrls {
  articlesReactionsUrl = 'https://test-project-f9414-default-rtdb.firebaseio.com/articles.json'
}

/*  */
export enum ContentSource {
  articlesDataUrl = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xiE45x0Ko9i4PoeHRqEU9rGDYWi4AGjI'
}
