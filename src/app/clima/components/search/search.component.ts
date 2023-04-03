import { CiudadService } from './../../services/ciudad.service';
import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import { ClimaService } from '../../services/clima.service';
import { Ciudad } from '../../models/city';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private climaSvc : ClimaService, private ciudadSvc : CiudadService) { }


  ciudadCtrl = new FormControl('')
  ciudadesBuscador$! : Observable<Ciudad[]>

  ngOnInit(): void {
    this.ciudadCtrl.valueChanges.subscribe(value => {
      this.ciudadesBuscador$ = this.ciudadSvc.obtenerInfoCiudad(value!)
    })
  }

  seleccionarCiudad(ciudad : Ciudad){
    this.climaSvc.obtenerClima(ciudad).subscribe(clima => console.log(clima))
  }
}
