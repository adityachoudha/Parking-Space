import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-slots',
    templateUrl: './slot.component.html',
    styleUrls: ['./slot.component.css']
})

export class SlotComponent{
    @Input() BookingData: any[] = [];
}