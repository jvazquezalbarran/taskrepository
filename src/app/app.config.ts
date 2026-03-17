//import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
//import { provideRouter } from '@angular/router';

//import { routes } from './app.routes';

//export const appConfig: ApplicationConfig = {
//  providers: [
//    provideBrowserGlobalErrorListeners(),
//    provideRouter(routes)
//  ]
//};
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule) // BrowserModule + FormsModule para ngModel
  ]
};
