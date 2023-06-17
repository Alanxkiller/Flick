import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  @ViewChild('myChart') myChart!: ElementRef;
  chart!: Chart;
  datos: number[] = [];
  tablaDatos: number[] = [];
  nombresCines: string[] = ['A', 'B', 'C', 'D', 'E']; // Nombres de los cines

  ngOnInit(): void {
    Chart.register(...registerables); // Registra todos los componentes necesarios de Chart.js
  }

  generarDatosAleatorios(): void {
    this.datos = [];
    this.tablaDatos = [];
    for (let i = 0; i < 5; i++) {
      const dato = Math.floor(Math.random() * 10) + 1;
      this.datos.push(dato);
      this.tablaDatos.push(dato);
    }
  }

  generarGrafica(): void {
    this.generarDatosAleatorios();

    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.myChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cine A', 'Cine B', 'Cine C', 'Cine D', 'Cine E'],
        datasets: [
          {
            label: 'Boletos Vendidos',
            data: this.datos,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true
          },
          x: {
            type: 'category',
            ticks: {
              autoSkip: false
            }
          }
        }
      }
    });
  }
}
