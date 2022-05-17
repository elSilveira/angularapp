import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cars: Array<Car> = new Array<Car>();
  title: String = 'Silveira App';
  pilotos: Array<String> = ['Hamilton', 'Perez', 'Leclerc', 'Fittipaldi'];
  cores: Array<String> = ['black', 'cyan', 'green', 'red'];
  finish: Boolean = false;

  ngOnInit(): void {
    this.pilotos.push('Dizeritus');
    this.cores.push('pink');

    this.prepareRace();
  }

  prepareRace() {
    this.cars = new Array<Car>(); //[]

    this.pilotos.forEach((piloto, posicao) => {
      let car: Car = this.createCar(piloto, Math.random(), this.cores[posicao]);

      this.cars.push(car);
    });

    console.log(this.cars);

  }

  createCar(nome: String, numero: number, cor: String) {
    return new Car(nome, numero, cor);
  }

  startRace() {
    setInterval(() =>
      this.cars.forEach(car => car.setDistance(Number(Math.random() * 10)))
      , 500);
  }

}

export class Car {
  nome: String;
  numero: number;
  cor: String;
  distance: number;

  constructor(nome: String, numero: number, cor: String) {
    this.nome = nome;
    this.numero = numero;
    this.cor = cor;
    this.distance = 0;
  }

  setDistance(value: number) {
    this.distance += value;
  }

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