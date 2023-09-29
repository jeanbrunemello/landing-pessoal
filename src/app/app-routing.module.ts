import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ModeloComponent } from './pages/modelo/modelo.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';


const routes: Routes = [
  {
    path: "home",
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
      // {
      //   path: "**",
      //   component: NotFoundComponent
      // }
    ]
  },
  {
    path: "exibir",
    component: ModeloComponent,
    children: [
      {
        path: 'sobre',
        component: SobreComponent,
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  },
  // {
  //   path: 'catalogos',
  //   component: MateriaisComponent,
  //   children: [
  //     {
  //       path: 'exibir',
  //       component: CatalogoComponent,
  //     },
  //     {
  //       path: "exibir/:id",
  //       component: CatalogoDocumentosComponent,
  //     },
  //     {
  //       path: 'exibir/:id/documentos/:documentoId',
  //       component: CatalogoListaComponent,
  //     },
  //   ]
  // },
  {
    path: "**",
    redirectTo: "/exibir/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
