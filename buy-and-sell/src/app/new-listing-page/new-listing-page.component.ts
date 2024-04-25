import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent {
  constructor(
    private router: Router,
    private ListingService: ListingsService,
  ){}

  ngOnInit(): void{

  }

  onSubmit({name, description, price}: { name: string, description: string, price: number }): void {
    this.ListingService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings')
      })
  }

}
