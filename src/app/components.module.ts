import { NgModule } from '@angular/core';
import { CarComponent } from 'src/components/car/car.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CarComponent,
  ],
  exports:[
      CarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ComponentsModule { }
