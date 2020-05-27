import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


//Importante los componentes que se deben mostrar de acuerdo a la ruta 

import { TipsComponent} from './components/tips/tips.component';


/* 
    Crearemos una constante de tipo Routes a travès de typescript
    cuyo valor serà un arreglo de json donde tendremos las rutas
    enlazados o  relacionados con los componentes que deseemo mostrar

    var nombre = 'kevin 'JS
    var nombre : string = 'kevin' TS
*/


const routes : Routes = [ 
  {path:'tips' , component: TipsComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
  })

  export class AppRoutingModule{

  }

