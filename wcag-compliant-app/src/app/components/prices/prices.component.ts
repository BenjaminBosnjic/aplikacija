import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PriceListService } from '../../services/price-list.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private priceListService: PriceListService
  ) { }

  card: any;
  title: string;
  imgUrl: string;
  alt: string;

  services = [];

  ngOnInit() {
    let serviceId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.card = this.priceListService.getCard(serviceId).subscribe(card => {
      this.title = card.title;
      this.imgUrl = card.imgUrl;
      this.alt = card.alt;
    });

    this.services = this.priceListService.getPrices(serviceId).subscribe(data => {
      this.services = data;
    });
  }

}
