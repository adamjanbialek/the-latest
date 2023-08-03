import {Injectable} from "@angular/core";

export interface Functionality {
  name: string;
  url? : string;
  imageUrl: string;
  isReady: boolean;
}

@Injectable({
  providedIn: "root"
})
export class FunctionalitiesListService {
  functionalitiesArray: Functionality[] = [
    {
      name: 'Top Stories',
      url: 'top-stories',
      imageUrl: 'assets/news.jpg',
      isReady: true
    },
    {
      name: 'Weather Forecast',
      imageUrl: 'assets/weather.jpg',
      isReady: false
    },
    {
      name: 'Stocks Info',
      imageUrl: 'assets/stocks.jpg',
      isReady: false
    },
    {
      name: 'Live Results',
      imageUrl: 'assets/sports.jpg',
      isReady: false
    }
  ]

}
