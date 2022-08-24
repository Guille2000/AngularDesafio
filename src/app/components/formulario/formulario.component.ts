import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
     nombre:[''],
     apellido:[''],
     pais:['']

  })


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario.value)
  }

}
