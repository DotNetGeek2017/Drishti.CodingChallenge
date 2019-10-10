import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
//HttpModule is deprecated
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app.routing";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CdkTableModule } from "@angular/cdk/table";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./notFound/pageNotFound.component";
import { SharedModule } from "./shared/shared.module";
import { Interceptor } from "./shared/services/interceptor.service";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCardModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CoreModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    CdkTableModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MatCardModule 
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
