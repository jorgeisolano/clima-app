import { Ciudad } from './../models/city';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private urlAPI = "https://api.open-meteo.com/v1/forecast"

  constructor(private httpClient: HttpClient) { }

  obtenerClima(ciudad: Ciudad) {
    return this.httpClient.get(this.urlAPI, {
      params:
        { latitude: ciudad.latitude, longitude: ciudad.longitude, hourly: 'temperature_2m', current_weather: true }
    })
  }
}
