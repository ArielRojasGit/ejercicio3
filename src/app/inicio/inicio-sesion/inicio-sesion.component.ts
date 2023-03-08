import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Comic } from 'src/app/service.service';


/**
 * @title Basic cards
 */

export class CardOverviewExample {}

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  
})

export class InicioSesionComponent implements OnInit {  
  data : Comic[] = []

  constructor(private ruta: Router) { }

  propietarioFC = new FormControl();

  ngOnInit(): void {}
  
  logado(){
    sessionStorage.setItem("propietario",this.propietarioFC.value)
    this.ruta.navigate(['tablaUsuario'])
  }
}






