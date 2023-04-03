
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { catchError, map, throwError } from 'rxjs';
import { CiudadResponse } from '../models/city';

@Injectable({
    providedIn: 'root'
})
export class CiudadService {

    private urlAPI = "https://geocoding-api.open-meteo.com/v1/search"

    constructor(private httpClient: HttpClient) { }

    obtenerInfoCiudad(ciudad: string) {
        return this.httpClient.get<CiudadResponse>(this.urlAPI, { params: {name: ciudad, language: 'es', count:'5'}}).pipe(
            map(response=> response.results),
            catchError(error=> throwError(error))
        )
    }
}
