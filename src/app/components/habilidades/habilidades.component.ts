import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

  habilidades = [
    {
      id: 1,
      habilidade: "Trabalho em equipe"
    },
    {
      id: 2,
      habilidade: "Comunicação assertiva"
    },
    {
      id: 3,
      habilidade: "Ética e respeito"
    },
    {
      id: 4,
      habilidade: "Aprendizado contínuo"
    },
    {
      id: 5,
      habilidade: "Criatividade"
    },
    {
      id: 6,
      habilidade: "Adaptabilidade"
    },
    {
      id: 7,
      habilidade: "Pensamento crítico"
    },
    {
      id: 8,
      habilidade: "Resolução de problemas"
    },
  ]

}
