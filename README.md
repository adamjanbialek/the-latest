Aplikacja jest podzielona na moduły - App, AppRouting, Core, Share, FeatureTopStories. W Core Module przechowywane są dane. 
W DataService przechowywane jest wynik requestu GET. Komponenty sprawdzają wartość zawartego tam arrayu i wywołują request 
tylko wtedy, kiedy array w DataService jest pusty.

Kiedy przejdziemy z komponentu TopStories na IndividualStories otwiera się strona z podstawowymi danymi na temat artykułu. 
Mamy możliwość wypełnienia formularza UserReactionsForm, który po kliknięciu wysyła się do bazy w Firebase.

Zaraz po wysyłaniu danych, uruchamia się request GET pobierający wszystkie posty z bazy i printujący je w konsoli. Wyobrażam sobie, 
że można byłoby stworzyć moduł zawierające wszystkie reakcje użytkownika. Na tą chwilę to printowanie tych danych nie spełnia żadnej roli poza 
pokazywaniem tego, że requesty działają poprawnie.

Na stronie tytułowej mamy 4 funkcjonalności, jedna oczywiście działa.
Jest zawarta w module TopStoriesFeatureModule, który ma zaimplementowany lazy loading. Nie zdążyłem wdrożyć mechanizmu autentyfikacji 
użytkowanika, co za tym idzie nie zaimplementowałem CanActivate, CanActivateChild, czy CanDeactivate, a także AutoLoginu, AutoLogoffu, 
co zrobiłbym na podstawie tokena. W Firebase też jest oczywiście umożliwiana zapisywania i odczytywania tylko przez zalogowanych 
użytkowników. Wykorzystałbym w tym celu Interceptory, gdzie dodałbym header requestu z odpowiednią wartością.

Nie korzystałem z subskrypcji i odsubskrybowania, bo trzy observables, które mam w swoim projekcie to observablese związane z requestami http, 
które po pobraniu danych, bądź wyrzucaniu errora, czyli po wypełnieniu(complete) same się odsubskrybowują.

W projekcie wykorzystałem strukture scssu 7-1, co prawda subfolderów jest tylko 5, ale to wynika ze skali projektu. Korzystałem ze zmiennych 
scssowych, jeśli chodzi o breakpointy i kolory- zadbałem o responsywność w przedziale okolo 320 do 1920.

Oczywiście korzystałem z GITa, stworzyłem 3 branche, jeden master, a dwa służyły do rozwijania funkcjonalności aplikacji. Po 
zakończeniu pracy nad nią zmergeowałem go z powrotem do mastera.

Zmodyfikowałem komponent FeatureTopStoriesComponent tak, żeby działał abstrakcyjnie i w obecnej chwili byłby obsłużyć wszystkie 4 funkcjonalności, 
więc można byłoby zmienić jego nazwę na FeatureContent. Trzeba byłoby jeszcze tylko zmodyfikować request pobierający dane tak, żeby dynamicznie 
ustalał który implementacje pobierania danych z API będzie w danej chwili wykorzystał. 
Z innych rzeczy przydałby się Loading Spinner wykorzystany globalnie oraz implementacja planszy, która by przesłaniała formularz po jego 
wypełnieniu z podziękowaniem.


# TheLatest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
