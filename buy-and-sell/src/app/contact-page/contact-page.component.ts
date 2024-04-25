import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  isLoading: boolean = true;
  email: string = "";
  message: string = "";
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ListingsService: ListingsService,
  ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id)!;

    this.ListingsService.getListingById(id!)
      .subscribe(Listing => {
        this.listing = Listing;
        this.isLoading = false;
        this.message = `Hi, I'm interested in your ${this.listing.name.toLocaleLowerCase()}!`;
      })
  }

  sendMessage(): void{
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
