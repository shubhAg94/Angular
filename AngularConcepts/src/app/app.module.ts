import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { HighlighterDirective } from './directives/highlighter.directive';
import { BetterHighlighterDirective } from './directives/better-highlighter.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component';
import { ReactiveNewcourseFormComponent } from './reactive-newcourse-form/reactive-newcourse-form.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptors } from './http-example/auth-interceptors.service';
import { LoggingInterceptorsService } from './http-example/logging-interceptors.service';
import { DynamicAlertcompComponent } from './dynamic-alertcomp/dynamic-alertcomp.component';
import { ReactiveParentFormComponent } from './reactive-parent-form/reactive-parent-form.component';
import { ReactiveChildFormComponent } from './reactive-parent-form/reactive-child-form/reactive-child-form.component';
import { ViewchildAndViewchildrenComponent } from './viewchild-and-viewchildren/viewchild-and-viewchildren.component';
import { HelloComponent } from './viewchild-and-viewchildren/hello.component';
import { BaconDirective } from './viewchild-and-viewchildren/bacon.directive';
import { ContentchildAndContentchildrenComponent } from './contentchild-and-contentchildren/contentchild-and-contentchildren.component';
import { BookDirective } from './contentchild-and-contentchildren/book.directive';
import { WriterComponent } from './contentchild-and-contentchildren/writer.component';
import { FavouriteBooksComponent } from './contentchild-and-contentchildren/favourite-books.component';
import { FavouriteCitiesComponent } from './contentchild-and-contentchildren/favourite-cities.component';
import { FavouriteFriendsComponent } from './contentchild-and-contentchildren/favourite-friends.component';
import { CityComponent } from './contentchild-and-contentchildren/city.component';
import { AddressComponent } from './contentchild-and-contentchildren/address.component';
import { ChildComponent } from './contentchild-and-contentchildren/child.component';
import { FriendComponent } from './contentchild-and-contentchildren/friend.component';
import { NgforTrackbyComponent } from './ngfor-trackby/ngfor-trackby.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    SummaryPipe,
    FilterPipe,
    DirectivesComponent,
    InputFormatDirective,
    HighlighterDirective,
    BetterHighlighterDirective,
    UnlessDirective,
    TemplateFormComponent,
    ReactiveSignupFormComponent,
    ReactiveNewcourseFormComponent,
    HttpExampleComponent,
    DynamicAlertcompComponent,
    ReactiveParentFormComponent,
    ReactiveChildFormComponent,
    ViewchildAndViewchildrenComponent,
    HelloComponent,
    BaconDirective,
    ContentchildAndContentchildrenComponent,
    BookDirective,
    WriterComponent,
    FavouriteBooksComponent,
    FavouriteCitiesComponent,
    FavouriteFriendsComponent,
    CityComponent,
    AddressComponent,
    ChildComponent,
    FriendComponent,
    NgforTrackbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptors, 
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInterceptorsService, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
