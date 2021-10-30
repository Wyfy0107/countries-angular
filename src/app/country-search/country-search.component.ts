import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Country } from '../countries/types';
import { CountrySearchService } from './country-search.service';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css'],
})
export class CountrySearchComponent implements OnInit {
  public countryNameForm = new FormControl('');
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private service: CountrySearchService) {}

  ngOnInit(): void {
    this.countryNameForm.valueChanges.subscribe((value: string) =>
      this.search(value)
    );
  }

  search(value: string) {
    this.searchEvent.emit(value);
  }
}
