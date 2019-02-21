import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewsComponent } from './news/news.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [  
  { path: '', redirectTo: '/Countries', pathMatch: 'full' },
  { path: 'Countries', component: IndexComponent },
  { path: 'News', component: NewsComponent },
  { path: 'News-Listing/:id', component: NewsListingComponent },
  { path: 'Country/:id', component: CountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

