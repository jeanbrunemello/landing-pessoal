import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ModeloComponent } from './pages/modelo/modelo.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContatoComponent } from './components/contato/contato.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: 'sobre',
        component: SobreComponent,
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent,
      },
      {
        path: 'tecnologias',
        component: TecnologiasComponent,
      },
      {
        path: 'contato',
        component: ContatoComponent,
      },
      {
        path: "404",
        component: NotFoundComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
