import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {


  countries: any[] = [];

  constructor( private httpClient: HttpClient) { 

    console.log("Constructor");
    
    //this.callCountry();
    
  }
  
  ngOnInit(): void {
    console.log("NgOnInit");

    this.httpClient.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (c:any) => {
      console.log('Subscribe');
      this.countries = c;
      
    });
    
  }
  
  
  callCountry() {
    let country: string = String(this.countries[0].name);
    Swal.fire({
      text: country
    });
  }
}
