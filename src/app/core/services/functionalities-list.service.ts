import {Injectable} from "@angular/core";

export interface Functionality {
  readonly contentType: string;
  dataUrl: string;
  name: string;
  url : string;
  imageUrl: string;
  isReady: boolean;
}

@Injectable({
  providedIn: "root"
})
export class FunctionalitiesListService {
  selectedFunctionality = '';

  selectFunctionality(contentType: string): Functionality {
    for (let functionality of this.functionalitiesArray) {
      if(functionality.contentType === contentType) {
        return functionality;
      }
    }
    return {
      dataUrl: '',
      contentType: '',
      name: '',
      url: '',
      imageUrl: '',
      isReady: false
    }
  }

  readyArray: Functionality[] = [];
  comingSoonArray: Functionality[] = [];

  sortFunctionalitiesByReadiness() {
    if(!this.readyArray.length && !this.comingSoonArray.length) {
      for (const item of this.functionalitiesArray) {
        item.isReady ? this.readyArray.push(item) : this.comingSoonArray.push(item);
      }
    }
  }

  get readyFunctionalities() {
    this.sortFunctionalitiesByReadiness();
    return this.readyArray;
  }

  get comingSoonFunctionalities() {
    this.sortFunctionalitiesByReadiness();
    return this.comingSoonArray;
  }

  functionalitiesArray: Functionality[] = [
    {
      dataUrl: 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=xiE45x0Ko9i4PoeHRqEU9rGDYWi4AGjI',
      contentType: 'articles',
      name: 'Top Stories',
      url: 'articles',
      imageUrl: 'assets/news.jpg',
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

}
