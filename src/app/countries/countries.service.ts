import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './types';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private url = 'https://restcountries-v2.herokuapp.com/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }
}
