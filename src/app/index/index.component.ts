import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../Services/CountriesService';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  
  public pageSizes = true;
  public previousNext = true;

  public Countries: any = [];
  public CountryNewsMap: any = [];
  public p: number = 1;
  constructor(public rest: CountriesService) {
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.GetCountries();
  }

  GetCountries() {

    this.Countries = [];
    this.rest.getCountries().subscribe((data: {}) => {
      this.Countries = data;
      this.gridView = {
        data: this.Countries.slice(this.skip, this.skip + this.pageSize),
        total: this.Countries.length
      };
    });

    this.GetCountriesWithNews(this.Countries);
  }

  GetCountryNewsMappings() {
    this.rest.getCountryNewsMappings().subscribe(data => {
      this.CountryNewsMap = data
    });
  }

  GetCountriesWithNews(CountriesJson: any) {
    console.log(CountriesJson);
    for (let Country = 0; Country < CountriesJson.length; Country++) {
      for (let News = 0; News < CountriesJson.CountryCodes.length; News++) {
        if (CountriesJson.CountryCodes[Country].name.search(CountriesJson.CountryCodes[News]) == -1) {
          console.log(CountriesJson.CountryCodes[Country].name)
          console.log('if');
        }
        else {
          //CountryNewsMapJson.CountryCodes[Country].name = "123";
          console.log(this.Countries.CountryCodes[Country].name)
          console.log('else');
        }
      }
    }
  }

  GetCountriesByRegion(Region: any) {
    this.Countries = [];
    if (Region == 'All') {
      this.rest.getCountries().subscribe((data: {}) => {
        this.Countries = data;
      });
    }
    else {
      this.rest.getCountriesByRegion(Region).subscribe((data: {}) => {
        this.Countries = data;
      });
    }
    this.GetCountriesWithNews(this.Countries);
  }

  SearchCountries(countryName){
    this.Countries = [];
    this.rest.getCountriesByName(countryName, false).subscribe((data: {}) => {
      this.Countries = data;
      this.gridView = {
        data: this.Countries.slice(this.skip, this.skip + this.pageSize),
        total: this.Countries.length
      };
    });

    this.GetCountriesWithNews(this.Countries);
  }
  alert1(val:string){
    alert(val);
  }
  ngOnInit() {
    this.CountryNewsMap =
      { "Argentina": "ar" }, { "Australia": "au" }, { "Austria": "at" },
      { "Belgium": "be" }, { "Brazil": "br" }, { "Bulgaria": "bg" }, { "Canada": "ca" },
      { "China": "cn" }, { "Colombia": "co" }, { "Cuba": "cu" }, { "Czech Republic": "cz" },
      { "Egypt": "eg" }, { "France": "fr" }, { "Greece": "ge" }, { "Hong Kong": "hk" },
      { "Hungary": "hu" }, { "India": "in" }, { "Indonesia": "id" }, { "Ireland": "Ie" },
      { "Israel": "il" }, { "Italy": "it" },
      { "Japan": "jp" }, { "Latvia": "lv" }, { "Lithuania": "lt" }, { "Malaysia": "my" },
      { "Mexico": "mx" }, { "Morocco": "ma" }, { "Netherlands": "nl" }, { "New Zealand": "nz" },
      { "Nigeria": "ng" }, { "Norway": "no" }, { "Philippines": "ph" }, { "Poland": "pl" },
      { "Portugal": "pt" }, { "Romania": "ro" }, { "Russia": "ru" }, { "Saudi Arabia": "sa" },
      { "Serbia": "rs" }, { "Singapore": "sg" }, { "Slovakia": "sk" }, { "Slovania": "si" },
      { "South Africa": "za" }, { "South korea": "kr" }, { "Sweden": "se" },
      { "Switzerland": "ch" }, { "Taiwan": "tw" }, { "Thailand": "th" },
      { "Turkey": "tr" }, { "United Arab Emirates": "ae" },
      { "Ukraine": "ua" },
      { "United Kingdom of Great Britain and Northern Ireland": "gb" },
      { "United States of America": "us" },
      { "Venezuela (Bolivarian Republic of)": "tr" }
      ;
    this.GetCountries();
    //this.GetCountriesWithNews();
  }


}
