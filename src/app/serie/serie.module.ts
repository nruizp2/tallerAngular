import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { ListarSeriesComponent } from './listarSeries/listarSeries.component';

@NgModule({
  imports: [CommonModule],
  exports: [SerieComponent, ListarSeriesComponent],
  declarations: [SerieComponent, ListarSeriesComponent],
})
export class SerieModule { }
