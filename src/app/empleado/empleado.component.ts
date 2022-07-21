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
  edad = 17;
  empresa = "ninguna";
  constructor() { }
  // getEdad(){
  //   return this.edad;
  // }
  ngOnInit(): void {
  }

}
