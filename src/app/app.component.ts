import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{

    name: string = '';
    contact: number| undefined ;
    vehicle: string = '';
    options: string = '';
    BookingData: any[] = [];

    onSubmit(data: any){
        this.name = data.name;
        this.contact = data.contact;
        this.vehicle = data.vehicle;
        this.options = data.options;
        
        if (this.BookingData.length >= 5) {
            alert('Sorry! No parking space available');
          } else {
            this.BookingData.push({
              name: this.name,
              contact: this.contact,
              vehicel: this.vehicle,
              options: this.options
            });
          }
        }
    }