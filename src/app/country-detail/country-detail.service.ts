import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../countries/types';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailService {
  constructor(private http: HttpClient) {}

  getOneCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries-v2.herokuapp.com/country/${name}`
    );
  }
}
