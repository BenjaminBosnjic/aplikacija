import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  saving = false;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router
    ) { }

  bookingForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    email: [''],
    phone: [''],
    date: [''],
    startTime: [''],
    endTime: [''],
    additionalInfo: ['']
  });

  ngOnInit(): void {
    let main = document.getElementById('main-content');
    main.focus();
  }

  saveBooking(event: any) {
    this.saving = true;
    event.preventDefault();
    this.bookingService.book(this.bookingForm.value).subscribe(response => {
      this.saving = false;
      this.router.navigateByUrl('/booking-success')
    }, (error) => {
      console.log(error);
      this.saving = false;
    })
  }

}
