import { NgModule } from '@angular/core';
import { CarComponent } from 'src/components/car/car.component';
import { PistaComponent } from 'src/components/pista/pista.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CarComponent,
    PistaComponent
  ],
  exports:[
      CarComponent,
      PistaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ComponentsModule { }
