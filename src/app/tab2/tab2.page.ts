import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  pontos1 = 0;
  pontos2 = 0;
  ganhou1 = 0;
  ganhou2 = 0;

  constructor() {}


  btn1(){
    this.valendo = 1;
  }
  btn3(){
    this.valendo = 3;
  }
  btn6(){
    this.valendo = 6;
  }
  btn9(){
    this.valendo = 9;
  }
  btn12(){
    this.valendo = 12;
  }


  mais1(){
    this.pontos1 = this.pontos1 + this.valendo
    if(this.pontos1 >= 12){
      this.pontos1 = 0;
      this.ganhou1 = this.ganhou1 + 1;
    }
  }
  menos1(){
    this.pontos1 = this.pontos1 - this.valendo
    if(this.pontos1 < 0){
      this.pontos1 = 0;
    }
  }

  mais2(){
    this.pontos2 = this.pontos2 + this.valendo
    if(this.pontos2 >= 12){
      this.pontos2 = 0;
      this.ganhou2 = this.ganhou2 + 1;
    }
  }
  menos2(){
    this.pontos2 = this.pontos2 - this.valendo
    if(this.pontos2 < 0){
      this.pontos2 = 0;
    }
  }

  limpar(){
    this.ganhou1 = 0;
    this.ganhou2 = 0;
  }


}
