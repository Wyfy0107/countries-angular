import { Component, Input, OnInit } from '@angular/core';

import { CountriesService } from './countries.service';
import { Country } from './types';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  @Input() countries: Country[] = [];
  public displayedColumns: string[] = [
    'name',
    'population',
    'region',
    'languages',
  ];

  constructor(private service: CountriesService) {}

  ngOnInit(): void {}
}
