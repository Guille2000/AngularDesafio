import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HeaderComponent } from './header/header/header.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    children:[
      {
        path:'tabla',
        component:TablaComponent
      },
      {
        path:'formulario',
        component:FormularioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
