import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from "@angular/core";
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private searchService: SearchService
  ) {
    this.onResize();
  }

  search1: string;
  search2: string;

  screenWidth:any;

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
   this.screenWidth = window.innerWidth;
  }

  goToMain() {
    let main = document.getElementById('main-content');
    main.focus();
  }

  onKey1($event) {
    this.search1 = $event.target.value;
  }

  onKey2($event) {
    this.search2 = $event.target.value;
  }

  goToResults() {
    let keyword = '' ;

    if (this.screenWidth >= 1500) {
      keyword = this.search1;
    } else {
      keyword = this.search2;
    }

    const spot = this.router.url.indexOf(';')

    if (this.router.url === '/search-results' || this.router.url.substring(0, spot) === '/search-results') {
      this.searchService.searched(keyword);
    } else {
      this.router.navigate(['/search-results', { keyword: JSON.stringify(keyword) }]);
    }
  }

}
