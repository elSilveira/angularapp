import { Component, Input } from '@angular/core';
import { Car } from 'src/app/app.component';

@Component({
    selector: 'car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent {
    @Input('car')
    car:any;

}
