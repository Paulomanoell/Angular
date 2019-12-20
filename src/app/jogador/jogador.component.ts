import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  imagem: string = "../assets/1.png";

  constructor() { }

  ngOnInit() {
  }

}
