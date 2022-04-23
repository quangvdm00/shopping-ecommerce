import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../common/country';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormService {

  private countriesUrl = `http://localhost:8080/api/countries`;
  private statesUrl = `http://localhost:8080/api/states`;

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    );
  }


  getCreditCardMonths(startMonth: number): Observable<number[]> {
    
    let data: number[] = [];

    // an array of month
    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }
    // of() ~ wraps an object as an Observable
    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }
    return of(data);
  }
}
