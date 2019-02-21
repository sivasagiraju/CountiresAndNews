import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CountriesService } from '../Services/CountriesService';
import { NewsService } from '../Services/news.service';
import { NgPipesModule } from 'ngx-pipes';
import { NewsComponent } from './news/news.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MenuModule } from '@progress/kendo-angular-menu';
import { MomentModule } from 'angular2-moment';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CountryComponent } from './country/country.component';
import { LayoutModule } from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsComponent,
    NewsListingComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule,
    NgxPaginationModule,
    NgPipesModule,
    GridModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ButtonsModule,
    MenuModule,
    MomentModule,
    InputsModule,
    LayoutModule
  ],
  providers: [CountriesService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
