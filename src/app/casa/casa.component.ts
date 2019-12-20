import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css'],
})
export class CasaComponent implements OnInit {

  jog1: string = "Pica-pau";
  jog2: string = "Zeca-Urubu";
  jogador: string = "jog1";
  valor: string = "";

  imagem1: string = "../../assets/3.png";
  imagem2: string = "../../assets/3.png";
  imagem3: string = "../../assets/3.png";
  imagem4: string = "../../assets/3.png";
  imagem5: string = "../../assets/3.png";
  imagem6: string = "../../assets/3.png";
  imagem7: string = "../../assets/3.png";
  imagem8: string = "../../assets/3.png";
  imagem9: string = "../../assets/3.png";
  
  clicou(index: number) {
    if (index === 1 && this.imagem1 == "../../assets/3.png") {
      if(this.jogador == "jog1"){
        this.imagem1 = "../../assets/1.png";
        this.jogador = "jog2";
        this.valor = "sim";
      }else if(this.jogador == "jog2"){
        this.imagem1 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 2 && this.imagem2 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem2 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem2 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 3 && this.imagem3 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem3 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem3 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 4 && this.imagem4 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem4 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem4 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 5 && this.imagem5 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem5 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem5 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 6 && this.imagem6 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem6 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem6 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 7 && this.imagem7 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem7 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem7 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 8 && this.imagem8 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem8 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem8 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
    else if(index === 9 && this.imagem9 == "../../assets/3.png"){
      if(this.jogador == "jog1"){
        this.imagem9 = "../../assets/1.png";
        this.jogador = "jog2";
      }else if(this.jogador == "jog2"){
        this.imagem9 = "../../assets/2.png";
        this.jogador = "jog1";
      }
    }
  }
  

  constructor() { }

  ngOnInit() {

  }

}
