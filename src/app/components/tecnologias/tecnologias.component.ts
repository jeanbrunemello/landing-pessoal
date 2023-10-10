import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {

  tecnologias = [
    {
      id: 1,
      tecnologia: "HTML",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 2,
      tecnologia: "CSS",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 3,
      tecnologia: "Bootstrap",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 4,
      tecnologia: "Javascript",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 5,
      tecnologia: "Typescript",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 6,
      tecnologia: "Angular",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 7,
      tecnologia: "Java",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 8,
      tecnologia: "Spring Boot",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 9,
      tecnologia: "C Sharp",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 10,
      tecnologia: "NET",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 11,
      tecnologia: "MySQL",
      logo: "../../../assets/images/logos/"
    },
    {
      id: 12,
      tecnologia: "SQL Server",
      logo: "../../../assets/images/logos/"
    },
  ]
  
}
