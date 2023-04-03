import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  constructor(
    private catalogueService: CatalogueService
  ) { }

  items: any;
  displayItems: any;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.catalogueService.getItems().subscribe((data: any[]) => {
      this.items = data;
      this.displayItems = data;
    });
  }

  filterItems(type: string) {
    if (type === 'all') {
      this.displayItems = this.items;
      return;
    }
    this.displayItems = this.items.filter((item) => {
      return item.type === type;
    });
  }

}
