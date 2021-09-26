import { Component, OnInit } from '@angular/core';

import { CountriesService } from './countries.service';
import { Country } from './types';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public countries: Country[] = [];
  public displayedColumns: string[] = [
    'name',
    'population',
    'region',
    'languages',
  ];

  constructor(private service: CountriesService) {}

  ngOnInit(): void {
    this.service.getCountries().subscribe((countries) => {
      console.log('countries', countries);
      this.countries = countries;
    });
  }
}
