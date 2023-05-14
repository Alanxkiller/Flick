import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // fechas:any = [
  //   {fecha: "2023-05-26T00:17"},
  //   {fecha: "2023-05-30T12:40"},
  //   {fecha: "2023-07-12T15:30"},
  //   {fecha: "2023-06-20T10:20"},
  // ]

  // fechasObj = JSON.stringify(this.fechas);

  ngOnInit(): void {
    // localStorage.setItem("fechasOcupadas", this.fechasObj);
  }
  title = 'flick';
  


}
