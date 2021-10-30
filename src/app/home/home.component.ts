import { Component, OnInit } from '@angular/core';
import { Country } from '../countries/types';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public countries: Country[] = [];
  public countriesSource: Country[] = [];
  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  searchString(value: string) {
    const result = this.service.search(value, this.countriesSource);
    this.countries = result;

    if (value === '') {
      this.getCountries();
    }
  }

  getCountries() {
    this.service.getCountries().subscribe((countries) => {
      this.countriesSource = countries;
      this.countries = countries;
    });
  }
}
