import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../Services/CountriesService';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})
export class CountryComponent implements OnInit {
  private p: number = 1;
  private CountryName: string;  
  private CountryDetails : any;
  constructor(private route: ActivatedRoute, private rest: CountriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.CountryName = params['id'];      
    });   
    this.GetCountryDetailsByCountryName(this.CountryName);
  }
  
  GetCountryDetailsByCountryName(countryName : any){
    this.rest.getCountryDetails(countryName).subscribe((data: {}) => {      
      this.CountryDetails = data;
    });
  }
}
