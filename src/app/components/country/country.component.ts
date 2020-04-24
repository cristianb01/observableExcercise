import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: any;
  loaded: boolean = false;

  constructor( private activatedRoute: ActivatedRoute,
               private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe( params => this.getCountry(params['id']));
   }



   getCountry(id: number) {
    this.httpClient.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
          .subscribe( country => {
            this.country = country;
            this.loaded = true;
          });
   }


  ngOnInit(): void {
  }

}
