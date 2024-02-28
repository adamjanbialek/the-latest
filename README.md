ENGLISH VERSION(POLISH BELOW):

# TheLatest
# Documentation for Version 0.9.9

## Application Structure
The application is structured into several modules:

AppModule: Main module of the application, containing AppComponent and HomeComponent.
AppRoutingModule: Module handling routing for the application.
CoreModule: Module holding services, models, pipes, and variables used throughout the application.
SharedModule: Module containing shared components and Angular Material modules used in the application.
FeatureContentSharedModule: Module considered the heart of the application, holding shared functionality. 
Due to its abstract nature it greatly reduces time needed to implement new features that share similar 
patterns.
FeatureContentSharedRoutingModule: Extends the functionality of AppRoutingModule by providing routing 
functionality in FeatureContentSharedModule.
FeatureArticlesModule: Module containing features related to articles, based on abstractions provided by 
FeatureContentSharedModule.

## Components
AppComponent: Main component of the application.
HomeComponent: Component representing the home page.
NavbarComponent: Provides the navigation inside the app.
ContentHomeComponent: Container Component of the feature module that implements the router-outlet.
ContentListComponent: Component that displays the list of the Content Items based on conditions set in its 
implementation of MatPaginatorModule.
ContentItemContainerComponent: Smart Component that handles the data and supplies it to its child components 
using async pipe.
ContentItemComponent: Presentational Component used purely to output the Article data to the screen.
OpinionOutputComponent: Presentational Component used purely to output the User Opinions data to the screen.
UserReactionsComponent: Component that holds the User Reaction Form and upon its submission sends the data
to the Firebase database through the use of RequestService.

## Services
ArticlesRequestsServiceImplementation: Implementation of RequestServiceInterface, handles the transforming of
data received from the backend and posting the opinions submitted by users.
RequestServiceInterface: Interface that defines the methods that services being a part of feature modules
that implement the FeatureContentSharedModule have to implement.
ContentDataService: Service responsible for storing data retrieved from the backend and checking if the data 
is loaded already or does it need to be downloaded.
FunctionalitiesListService: Service that supplies the data about the functionalities in the application.

## Routing
AppRoutingModule: Module handling routing for the application.
FeatureContentSharedRoutingModule providing routing functionality in the lazy loaded feature modules
based on FeatureContentSharedModule.

## Functionality Overview
In HomeComponent user can choose functionality to use.
That directs the user to the particular functionality based on FeatureContentSharedModule that abstracts 
the feature implementation and can be used later to implement some similar features in the app.
FeatureArticlesModule imports the FeatureContentSharedModule and handles features related to articles, 
including user reactions and opinions.
OpinionOutputComponent displays user opinions about articles and UserReactionsFormComponent collects
the data from the user input. 
ArticlesRequestsServiceImplementation sends that data to the backend and also receives initial data 
when user access the feature.

## SCSS and Styling
Utilizes SCSS 7-1 structure for styling.
SCSS variables are used for breakpoints and colors.
Responsive design from 320 to 1920 pixels.
Custom theme for Angular Material.

## Possible Improvements
Added navigation features like back button and mobile navbar with a hamburger menu.
Implementation of the user authentication mechanism.

## Config and Running the App
The project was created with Node.js version v18.19.0 and Angular 15.1.5.
After the cloning the github repository and navigating to project's main folder you should run the command
"npm i".
After the installation is completed in order to run the project run the command "ng serve" and in the browser
navigate to http://localhost:4200.
You can run the tests using the command "ng test".

## Conclusion
This documentation provides an overview of the application structure, components, services, routing, 
functionality, styling approach, and potential future improvements for version 0.9.9.


# Dokumentacja dla Wersji 0.9.9

## Struktura Aplikacji
Aplikacja jest podzielona na kilka modułów:

AppModule: Główny moduł aplikacji zawierający AppComponent i HomeComponent.
AppRoutingModule: Moduł zarządzający routowaniem w aplikacji.
CoreModule: Moduł przechowujący usługi, modele, rury oraz zmienne używane w całej aplikacji.
SharedModule: Moduł zawierający współdzielone komponenty oraz moduły Angular Material używane w aplikacji.
FeatureContentSharedModule: Moduł uznawany za serce aplikacji, przechowujący funkcjonalności współdzielone. Dzięki swojej abstrakcyjnej naturze znacznie redukuje czas potrzebny do implementacji nowych funkcji, które dzielą podobne wzorce.
FeatureContentSharedRoutingModule: Rozszerza funkcjonalność AppRoutingModule poprzez dostarczanie funkcji routingu w FeatureContentSharedModule.
FeatureArticlesModule: Moduł zawierający funkcje związane z artykułami, oparte na abstrakcjach dostarczonych przez FeatureContentSharedModule.

## Komponenty
AppComponent: Główny komponent aplikacji.
HomeComponent: Komponent reprezentujący stronę główną.
NavbarComponent: Zapewnia nawigację w aplikacji.
ContentHomeComponent: Komponent kontenera modułu funkcji, który implementuje router-outlet.
ContentListComponent: Komponent wyświetlający listę elementów zawartości na podstawie ustawień określonych w jego implementacji modułu MatPaginatorModule.
ContentItemContainerComponent: Komponent inteligentny, który zarządza danymi i dostarcza je do swoich komponentów potomnych za pomocą potoku async.
ContentItemComponent: Komponent prezentacyjny służący wyłącznie do wyświetlania danych artykułu na ekranie.
OpinionOutputComponent: Komponent prezentacyjny służący wyłącznie do wyświetlania danych opinii użytkowników na ekranie.
UserReactionsComponent: Komponent, który zawiera formularz reakcji użytkownika i po jego złożeniu wysyła dane do bazy danych Firebase za pośrednictwem usługi RequestService.

## Usługi
ArticlesRequestsServiceImplementation: Implementacja interfejsu RequestServiceInterface, obsługuje transformację danych otrzymanych z backendu oraz wysyłanie opinii przesłanych przez użytkowników.
RequestServiceInterface: Interfejs definiujący metody, które muszą implementować usługi będące częścią modułów funkcji, które implementują FeatureContentSharedModule.
ContentDataService: Usługa odpowiedzialna za przechowywanie danych pobranych z backendu i sprawdzanie, czy dane są już załadowane, czy potrzebują być pobrane.
FunctionalitiesListService: Usługa dostarczająca dane o funkcjonalnościach w aplikacji.
Routowanie
AppRoutingModule: Moduł zarządzający routowaniem w aplikacji.
FeatureContentSharedRoutingModule: Dostarcza funkcjonalność routingu w leniwie ładowanych modułach funkcji opartych na FeatureContentSharedModule.

## Przegląd Funkcjonalności
W HomeComponent użytkownik może wybrać funkcjonalność do użycia.
To kieruje użytkownika do konkretnej funkcji opartej na FeatureContentSharedModule, która abstrahuje implementację funkcji i może być później używana do implementacji podobnych funkcji w aplikacji.
FeatureArticlesModule importuje FeatureContentSharedModule i zarządza funkcjami związanymi z artykułami, w tym reakcjami użytkowników i opiniami.
Komponent OpinionOutputComponent wyświetla opinie użytkowników na temat artykułów, a UserReactionsFormComponent zbiera dane z wprowadzonych przez użytkownika.
ArticlesRequestsServiceImplementation wysyła te dane do backendu i otrzymuje również początkowe dane, gdy użytkownik uzyskuje dostęp do funkcji.

## SCSS i Stylizacja
Wykorzystuje strukturę SCSS 7-1 do stylizacji.
Używane są zmienne SCSS dla punktów przełamania i kolorów.
Projektowanie responsywne od 320 do 1920 pikseli.
Własny motyw dla Angular Material.

## Potencjalne Ulepszenia
Dodane funkcje nawigacyjne, takie jak przycisk powrotu i menu nawigacyjne dla urządzeń mobilnych z menu typu hamburger.
Wdrożenie mechanizmu autentykacji użytkownika.

## Konfiguracja i Uruchomienie Aplikacji
Projekt został utworzony z wykorzystaniem Node.js w wersji v18.19.0 oraz Angular w wersji 15.1.5.
Po sklonowaniu repozytorium GitHub i przejściu do głównego folderu projektu należy uruchomić polecenie "npm i".
Po zakończeniu instalacji w celu uruchomienia projektu należy wprowadzić polecenie "ng serve", a następnie w przeglądarce przejść pod adres http://localhost:4200.
Testy można uruchomić za pomocą polecenia "ng test".

## Podsumowanie
Ta dokumentacja dostarcza przeglądu struktury aplikacji, komponentów, usług, routingu, funkcjonalności, podejścia do stylizacji oraz potencjalnych przyszłych ulepszeń dla wersji 0.9.9.
