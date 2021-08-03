import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap  } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },

  ]

  heroe: Heroes = {
    
    superhero:        '',
    publisher:        Publisher.DCComics,
    alter_ego:        '',
    first_appearance: '',
    characters:       '',
    alt_img:         ''
  }

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ){
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe( (h) => {
      this.heroe = h;
    })

  }

  guardar() {
    if( this.heroe.superhero.trim().length == 0){
      return
    }

    if(this.heroe.id){
      //Actualizar
      this.heroesService.actualizarHeroe(this.heroe, this.heroe.id)
      .subscribe( h => {
        console.log("Actualizando heroe..", h);
        this.mostrarSnakbar("Actualizando héroe..")
        
      })
    } else {
      //Crear
      this.heroesService.agregarHeroe( this.heroe )
      .subscribe( resp => {
        this.router.navigate(['/heroes/editar', resp.id]);
        this.mostrarSnakbar("Creando héroe..")
        
      })
    }
    
  }

  borrar() {

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.heroesService.borrarHeroe( this.heroe.id! )
        .subscribe( resp => {
          this.router.navigate(['/heroes'])
        })
      }
    });

    
  }

  mostrarSnakbar( mensaje: string){
    this._snackBar.open( mensaje, 'Cerrar', {
      duration: 2500
    })
  }

}
