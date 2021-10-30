import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../countries/types';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = 'https://restcountries-v2.herokuapp.com/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  search(input: string, countries: Country[]) {
    return countries.filter((c) =>
      c.name.toLowerCase().includes(input.toLowerCase())
    );
  }
}
