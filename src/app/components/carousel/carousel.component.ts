//6_ Agregamos el OnInit
import { Component, OnInit} from '@angular/core';
//7_ importar servicio
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

//8_agregamos el OnInit y su propiedad debajo ngOnInit
export class CarouselComponent implements OnInit {

  //9_ Declaramos las variables de los datos que vamos a llamar del JSON.
  miNombre: string = '';
  especialidad: string = ''; //falta completar abajo
  slide1: any;
  slide2: any;
  slide3: any;

  //10_ Crear constructor e Inyectar el servicio para tener acceso en la clase a los Metodos
  constructor(
      private personaService: PersonaService
    ) { }



  //11_ Traemos los datos del servicio y el JSON que vamos a utilizar en este componente
  //propiedad
  ngOnInit(): void {
    /*
    //nos suscribimos a los datos ya que anteriormente eran observables
    this.personaService.getDatos().subscribe(datos => {
      this.miNombre = datos.miNombre;
      this.especialidad = datos.especialidad;
      this.slide1 = datos.slide1;
      this.slide2 = datos.slide2;
      this.slide3 = datos.slide3;
    })*/

  }
}
