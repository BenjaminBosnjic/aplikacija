import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PriceListService } from 'src/app/services/price-list.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(
    private router: Router,
    private priceListService: PriceListService
  ) { }

  cards: any;

  ngOnInit(): void {

    this.priceListService.getCards().subscribe((data: any[]) => {
      this.cards = data;
    });
  }

  goToPrices(serviceId: number) {
    this.router.navigateByUrl('prices/' + serviceId);
  }

}
