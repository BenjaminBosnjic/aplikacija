import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PriceListService } from 'src/app/services/price-list.service';
import { SearchService } from 'src/app/services/search.service';

class Link {
  title: string;
  text: string;
  tags: string[];
  url: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private priceListService: PriceListService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  links: Link[];
  allLinks: Link[];

  noResults = false;

  ngOnInit(): void {
    let main = document.getElementById('main-content');
    main.focus();

    this.priceListService.getCards().subscribe((data: any[]) => {
      this.links = data;
      this.links.push(
      {
          title: "Employment",
          text: "All of the job offers we have",
          tags: ["employment", "job"],
          url: "/employment"
      },
      {
        title: "Catalogue",
        text: "All of the products we offer",
        tags: ["catalogue", "products", "toothpaste", "toothbrush", "medicine"],
        url: "/catalogue"
      },
      {
        title: "About",
        text: "Read all about our clinic",
        tags: ["about"],
        url: "/about-us"
      })
      this.allLinks = this.links;
      const keyword = JSON.parse(this.route.snapshot.paramMap.get('keyword'));

      if (keyword === '') {
        this.links = this.allLinks;
      } else {
      this.links = this.links.filter(link => {
          for (let tag of link.tags) {
            if (tag === keyword.toLowerCase()) {
              return true;
            }
          }
          return false;
        })
      }
      if (this.links.length < 1) {
        this.noResults = true;
      }

      this.searchService.keywordEmit.subscribe((keyword) => {
        if (keyword === '') {
          this.links = this.allLinks;
          return;
        }
        this.links = this.allLinks.filter(link => {
          for (let tag of link.tags) {
            if (tag === keyword.toLowerCase()) {
              return true;
            }
          }
          return false;
        })
        if (this.links.length < 1) {
          this.noResults = true;
        }
      })
    });
  }

}
