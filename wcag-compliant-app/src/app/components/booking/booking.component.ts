import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  saving = false;

  todaysDate;

  dateInvalid = false;
  timeInvalid = false;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router
    ) { }

  bookingForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    address: ['', Validators.maxLength(100)],
    email2: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    phone: ['', [Validators.pattern("^[0-9]*$"), Validators.maxLength(25)]],
    date: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    additionalInfo: ['', Validators.maxLength(500)]
  });

  ngOnInit(): void {
    let main = document.getElementById('main-content');
    main.focus();

    this.todaysDate = new Date();
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

  onDateChange($event) {
    if (new Date(this.bookingForm.get('date').value) <= this.todaysDate) {
      this.dateInvalid = true;
    }  else {
      this.dateInvalid = false;
    }
  }

  onTimeChange($event) {
    if (this.bookingForm.get('startTime').touched && this.bookingForm.get('endTime').touched && this.bookingForm.get('startTime').value >= this.bookingForm.get('endTime').value) {
      this.timeInvalid = true;
    } else {
      this.timeInvalid = false;
    }
  }

}
