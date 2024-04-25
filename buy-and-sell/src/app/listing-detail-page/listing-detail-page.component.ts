import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent {
  isLoading: boolean = true;
  listing!: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private ListingsService: ListingsService,
  ){
    this.listing = {
      id: '',
      name: '',
      description: '',
      price: 0,
      views: 0,
    }
  }

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.ListingsService.getListingById(id!)
      .subscribe(listing => {
        this.listing = listing
        this.isLoading = false;
      });
    this.ListingsService.addViewToListing(id!)
      .subscribe(() => console.log('Views Updated!'))
  }
}
