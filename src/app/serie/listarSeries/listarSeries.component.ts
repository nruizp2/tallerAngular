import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-listarSeries',
  templateUrl: './listarSeries.component.html',
  styleUrls: ['./listarSeries.component.css']
})
export class ListarSeriesComponent implements OnInit {
  public series: Array<Serie> = [];
  public sum = 0;
  public promedio = 0;
  constructor(private serieService: SerieService) { }

  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.sum += serie.seasons
      })
      this.series = series;
      this.promedio = this.sum/series.length
    });
    
  } 

  ngOnInit() {
    this.getSeries();
  }

}
