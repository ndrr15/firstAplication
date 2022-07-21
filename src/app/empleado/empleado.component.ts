import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí iria un Empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p {background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre = "David";
  apellido = "Rodriguez";
  edad = 28;
  //empresa = "ninguna";
  // getEdad(){
  //   return this.edad;
  // }
  habilitacionCuadro = false;
  usuRegistrado = true;
  getRegistroUsuario(){
    this.usuRegistrado = true
  }
  constructor() { }
  ngOnInit(): void {
  }

}
