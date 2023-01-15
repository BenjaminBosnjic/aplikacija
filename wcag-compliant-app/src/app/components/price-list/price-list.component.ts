import { Component, OnInit } from '@angular/core';
import { PriceListService } from 'src/app/services/price-list.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(
    private priceListService: PriceListService
  ) { }

  cards: any;

  ngOnInit(): void {
    this.priceListService.getCards().subscribe((data: any[]) => {
      this.cards = data;
  });
  }

}
