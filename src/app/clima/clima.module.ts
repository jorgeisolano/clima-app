import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { InfoCityComponent } from './components/info-city/info-city.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    InfoCityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    MainComponent,
    SearchComponent,
    InfoCityComponent
  ]
})
export class ClimaModule { }
