import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  contatos = [
    {
      id: 1,
      rede: "LinkedIn",
      url: "https://www.linkedin.com/in/jeanbrunemello/",
      logo: "../../../assets/images/icons/"
    },
    {
      id: 2,
      rede: "GitHub",
      url: "https://github.com/jeanbrunemello",
      logo: "../../../assets/images/icons/"
    },
    {
      id: 3,
      rede: "Gmail",
      url: "mailto:jeanbrunemello@gmail.com",
      logo: "../../../assets/images/icons/"
    },
  ]
  
}
