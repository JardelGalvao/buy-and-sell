import { Component } from '@angular/core';
import { Listing  } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent {
  listings: Listing[] = [];

  constructor(
    private ListingsService: ListingsService
  ){}

  ngOnInit(): void{
    this.ListingsService.getListingsForUser()
      .subscribe(Listing => this.listings = Listing);
  }

  onDeleteClicked(listingId: string): void{
    this.ListingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings = this.listings.filter(
          listing => listing.id !== listingId
        );
      });
    
  }
}
