import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let main = document.getElementById('main-content');
    main.focus();
  }

}
