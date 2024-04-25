import { Component } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent {
  listings: Listing[] = []

  constructor(
    private ListingsService: ListingsService,
  ){}

  ngOnInit():void {
    this.ListingsService.getListings()
      .subscribe(listings => this.listings = listings)
  }
}
