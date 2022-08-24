import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  exports:[
  MatTableModule,
  MatToolbarModule
  ]
})
export class MaterialModule { }
