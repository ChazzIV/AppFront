import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
                            'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
                            'Noviembre', 'Diciembre'];
  date: Date = new Date();

  printDate = `${this.date.getDate()}/${this.meses[this.date.getMonth()]}/${this.date.getFullYear()}`;

  constructor() { }

  ngOnInit(): void {
  }

}
