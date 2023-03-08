import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface Comic{
    propietario: string,
    codigo : number,
    titulo : string,
    autor: string,
    descripcion : string,
    precio : number
}


@Injectable({
    providedIn:'root'//el provideIn lo que hace es que cuando se carga lo importa en app module (root de la app).solo para los servicios
})
export class LogadoService{
    constructor(private http: HttpClient){}


    getPropietario(): Observable<Comic[]>{
        return this.http.get<Comic[]>('http://localhost:5000/datos')
    }
}

