import { Component } from '@angular/core';
import Place from '../interfaces/place.interface';

import Chart from 'chart.js/auto';
import { PlacesService } from '../places.service';

const cinesPosibles = ["Cinepolis","Cinemex","Cine Kristal"];

interface Cines {
  label: string;
  cantidad: number;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  places: Cines[];

  public chart: any;

  constructor(
    private placesService: PlacesService,
    ) { 
      this.places = [];
    }

  async ngOnInit(){
    await this.countCines();
    this.createChart();
  }

  async countCines(){
    this.places = [];
    for(const cine of cinesPosibles){
      const numCines = await this.placesService.getPlacesCount(cine)
      this.places.push({
        label: cine,
        cantidad: numCines
      })
    }
    console.log(this.places);
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: cinesPosibles, 
	       datasets: [
          {
            label: "Cantidad de citas",
            data: this.places.map((place)=> place.cantidad.toString()),
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
