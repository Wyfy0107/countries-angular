import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../countries/types';
import { CountryDetailService } from './country-detail.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  public country: Country | null = null;

  constructor(
    private service: CountryDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name') as string;
    this.service
      .getOneCountry(name)
      .subscribe((data) => (this.country = data[0]));
  }
}
