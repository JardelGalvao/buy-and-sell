import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute} from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent {
  listing!: Listing;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ListingsService: ListingsService,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ListingsService.getListingById(id!)
      .subscribe(Listing => this.listing = Listing)
  }

  onSubmit({name, description, price}:{name: string, description: string, price: number }): void {
    this.ListingsService.editListing(this.listing.id, name, description, price)
      .subscribe(() => {
        alert('Saving changes to the listing...');
        this.router.navigateByUrl('/my-listings');
      })
  }
}
