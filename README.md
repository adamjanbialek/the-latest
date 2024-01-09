// ENGLISH VERSION(POLISH BELOW):

Description for version 0.9.6:

The application is divided into modules - App, AppRouting, Core, Shared, FeatureContentShared, FeatureContentSharedRouting, and FeatureArticles.

In the AppModule, we have 2 components - AppComponent and HomeComponent. It imports the Core and Shared modules, as well as AppRoutingModule, 
where lazy loading is set up for the FeatureContentModule.

The Core Module holds services, models, pipes, and variables that can potentially be used throughout the application. Concerning variables, it 
stores variable values to avoid unnecessary modifications of .html and .ts component files if there's a need to modify values such as strings. 
This separation ensures that these files contain only logic and remain distinct from literal values.

SharedModule stores the NavBar component, and two modules from Angular Material used in the NavBar are imported.

Upon selecting functionality in HomeComponent, we navigate to the lazily loaded FeatureArticles module, which in turn imports the 
FeatureContentShared module, considered the 'heart of the application'. The ContentDataService there stores the result of a GET request. 
Components check the value of the array stored there and only make a request when the array in ContentDataService is empty. In the 
ContentList component we can choose to enter one of the ContentItemContainer(acting as a parent for ContentItem and OpinionOutput components) 
that are visible. That opens a page with basic article data. Users can fill out the UserReactionsForm (a child of the ContentItem component), 
which upon clicking sends the form's value to the Firebase database. User-added opinions are displayed at the bottom in the 
OpinionOutputComponent, divided into two parts: the first shows opinions about the current article, while the second displays three opinions 
about other articles. There's currently a missing feature that would automatically displayed the added opinion immediately after filling out 
the form; currently, a page refresh is needed to see it, but this functionality will soon be implemented.

The entire FeatureContentShared module works abstractly and is imported by the FeatureArticles module, which injects the real implementation of 
the service based on the RequestsService interface using an InjectionToken in the FeatureContentSharedModule. To create additional functionality 
for the application, it suffices to create a module file that imports the FeatureContentSharedModule, add new paths to AppRoutingModule, and 
create a new service that converts data in the manner of ArticlesRequestsServiceImpl.

In the project, I used the SCSS 7-1 structure; although there are only 5 subfolders, it is due to the project's scale. I utilized SCSS variables 
for breakpoints and colors, ensuring responsiveness from approximately 320 to 1920. I also created a custom theme for Angular Material.

Future plans include:

1. Implementing a solution that automatically displays the added opinion immediately after filling out the form.
2. Missing UI elements:
a) A sticky navbar that hides when the user scrolls down and reappears when the user scrolls up.
b) Implementing a back button.
c) After filling out the form in an article, displaying a panel thanking the user instead of resetting the form.

One could also implement a user authentication mechanism, consequently utilizing CanActivate, CanActivateChild, or CanDeactivate, as well as 
AutoLogin and AutoLogoff features based on the token. In Firebase, writing and reading would, of course, be restricted to logged-in users only. 
For this purpose, I would utilize Interceptors, where I would add a request header with the appropriate value.


// POLSKA WERSJA

Opis dla wersji 0.9.6:

Aplikacja jest podzielona na moduły - App, AppRouting, Core, Shared, FeatureContentShared, FeatureContentSharedRouting i FeatureArticles.

W AppModule mamy 2 komponenty - AppComponent i HomeComponent, importuje on moduły Core i Shared, a także AppRoutingModule, 
w którym jest ustawiony lazy loading dla modułu FeatureContentModule.

W Core Module przechowywane są serwisy, modele, pipe'y i zmienne, które mogą być potencjalnie używane w całej aplikacji.
Jeśli chodzi o zmienne to są tam przechowywane wartości zmiennych po to, żeby uniknąć zbędnego modyfikowania plików .html i .ts komponentów
w razie potrzeby modyfikacji wartości np. stringów i po to, żeby w tych plikach była wyłącznie logika i żeby nie mieszała się z wartościami
literalnymi.

W SharedModule jest przechowywany komponent NavBaru i importowane są dwa moduły będące częściami Angular Material wykorzystywane w NavBarze.

Po wybraniu funkcjonaloności w HomeComponent przechodzimy do lazy loadowanego modułu FeatureArticles, który z kolei importuje moduł 
FeatureContentShared, który jest "sercem aplikacji". Tam w ContentDataService przechowywany jest wynik GET requestu. Komponenty sprawdzają 
wartość zawartego tam arrayu i wywołują request tylko wtedy, kiedy array w ContentDataService jest pusty. Kiedy przejdziemy z komponentu 
ContentList na ContentItemContainer(który pełni role rodzica dla komponentów ContentItem i OpinionOutput) otwiera się strona z podstawowymi 
danymi na temat artykułu. Mamy możliwość wypełnienia formularza UserReactionsForm(jest dzieckiem komponentu ContentItem), który po kliknięciu wysyła 
wartość formularza do bazy w Firebase. Opinie dodane przez użytkowników są wyświetlane na dole w OpinionOutputComponent, który jest 
podzielony na 2 części. Pierwsza wyświetla opinie nt bieżącego artykułu. Druga 3 opinie nt innych artykułów. Brakuje jeszcze rozwiązania, 
które automatycznie wyświetlałoby dodaną opinie bezpośrednio po wypełnieniu formularza, więc obecnie, żeby ją zobaczyć trzeba odświeżyć 
stronę. Niedługo się ono pojawi.

Cały moduł FeatureContentShared działa abstrakcyjnie, jest importowany przez moduł FeatureArticles, kt.ory wstrzykuję z użyciem InjectionTokena 
realną implementacje serwisu opartego na interfejsie RequestsService wykorzystywany w FeatureContentSharedModule. Wystarczy stworzyć 
plik modułu importującego FeatureContentSharedModule, dodać nowe ścieżki do AppRoutingModule i stworzyć nowy serwis konwertujący dane na 
wzór ArticlesRequestsServiceImpl, żeby stworzyć kolejną funkcjonalność do aplikacji.

W projekcie wykorzystałem strukture scssu 7-1, co prawda subfolderów jest tylko 5, ale to wynika ze skali projektu. Korzystałem ze 
zmiennych scssowych, jeśli chodzi o breakpointy i kolory- zadbałem o responsywność w przedziale okolo 320 do 1920. Stworzyłem też customowy 
motyw dla Angular Material.

Planuję jeszcze:
1. Dodać rozwiązanie, które automatycznie wyświetlałoby dodaną opinie bezpośrednio po wypełnieniu formularza.
2. Brakujące elementy z zakresu UI: 
a) sticky navbar chowający się, gdy użytkownik scrolluje w dół i pojawiający się, gdy użytkownik scrolluje w 
górę
b) zaimplementować przycisk wstecz
c) po wypełnieniu formularza w artykule wyświetlić planszę z podziękowaniem dla użytkownika zamiast zresetowanego formularza

Można byłoby też zaimplementować mechanizm autentyfikacji użytkownika, co za tym idzie wykorzystać CanActivate, CanActivateChild, czy 
CanDeactivate, a także AutoLogin, AutoLogoff na podstawie tokena. W Firebase też jest oczywiście umożliwiana zapisywania i odczytywania 
tylko przez zalogowanych użytkowników. Wykorzystałbym w tym celu Interceptory, gdzie dodałbym header request z odpowiednią wartością.


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
