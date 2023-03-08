import { MatPaginator }                        from '@angular/material/paginator';
import { Comic, LogadoService }                from './../../service.service';
import { Component,  ViewChild, AfterViewInit }from '@angular/core';
import { MatTable, MatTableDataSource }        from '@angular/material/table';
import { HttpClient }                          from "@angular/common/http";
import { map }                                 from 'rxjs/operators';


@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss']
})

export class TablaUsuarioComponent implements AfterViewInit  {
  datos: MatTableDataSource<Comic> = new MatTableDataSource<Comic>();
  propietario: string = sessionStorage.getItem('propietario');
  columnas: string[] = ['codigo', 'titulo', 'autor', 'descripcion','precio'];

  @ViewChild(MatTable) tabla1!: MatTable<Comic>;
  @ViewChild(MatPaginator) paginacion: MatPaginator;

  

  constructor(private http: HttpClient, private propietarioService: LogadoService) { }
  ngAfterViewInit(): void {
    this.datos.paginator = this.paginacion;
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('propietario'));
    this.propietarioService.getPropietario()
    
    .pipe(
      map(data => {
        const pro = data.filter(obj => obj.propietario == this.propietario);        
        return pro;
      })      
    )

    .subscribe(datos => {
      this.datos.data = datos;
      console.log(datos);
    })
  }
}



