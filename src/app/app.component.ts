import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = ' Silveira App';
  cars: Array<Car> = new Array<Car>();
  pilotos: Array<String> = ['Hamilton', 'Perez', 'Leclerc', 'Fittipaldi'];
  cores: Array<String> = ['black', 'cyan', 'green', 'red'];
  finish: Boolean = false;

  ngOnInit(): void {
    this.prepareRace();
    console.log(this.cars);
  }

  prepareRace() {
    this.cars = new Array<Car>();
    this.pilotos.forEach((piloto, index) => {
      let car: Car = this.createCar(piloto, Number(Math.random().toFixed(2)), this.cores[index]);
      this.cars.push(car);
    });
  }

  createCar(nome: String, numero: number, cor: String) {
    return new Car(nome, numero, cor);
  }

  startRace() {
    setInterval(() => this.cars.forEach(car => car.setDistance(Number(Math.random() * 10))), 500, 100);
  }

}

export class Car {
  nome: String;
  numero: number;
  cor: String;
  distance: number;
  constructor(nome: String, numero: number, cor: String, distance: number = 0) {

    this.nome = nome;
    this.numero = numero;
    this.cor = cor;
    this.distance = distance;
  }
  setDistance(value: number) { this.distance += value; }
  getDistance() {
    return this.distance;
  }
  getCor() {
    return this.cor;
  }
  getNumero() {
    return this.numero;
  }
  getNome() {
    return this.nome;
  }
}


export class Help {
  static isNullOrEmpty(value: any) {
    return value == null || value.length == 0;
  }
}