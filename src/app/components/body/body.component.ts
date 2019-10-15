import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
	
	mostrar = true;
	personajes: string[] = ['Batman','Venom','Spiderman','Dr. Octopus'];
	frase: any = {
		mensaje: 'Un gran poder requiere una gran responsabilidad', 
		autor: 'Ben Parker'
	};

  constructor() { }

  ngOnInit() {
  }

}
