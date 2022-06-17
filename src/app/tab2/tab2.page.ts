import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchCandidates: string;
  candidates = [
    {
      'name': 'João Soares',
      'number': '1256',
      'image': 'assets/first.jpg'
    },
    {
      'name': 'Jorge Amaral',
      'number': '2378',
      'image': 'assets/third.jpg'
    },
    {
      'name': 'Sandra Martins',
      'number': '5763',
      'image': 'assets/second.jpg'
    },

  ];


  count = 0;
  candidate1 = 0;
  candidate2 = 0;
  candidate3 = 0;
  blank = 0;

  constructor() {
  }

  ngOnInit() { }

  clearSearch() {
    this.searchCandidates = '';
  }

  inputBlank() {
    this.searchCandidates = '0';
    this.calculateVotes();
  }

  calculateVotes() {
   if( this.searchCandidates === ''|| this.searchCandidates === null|| this.searchCandidates === undefined){
    alert('Por favor, digite o número do candidato.');
   }
   else if(this.searchCandidates !== '0' && this.searchCandidates !== '1256' && this.searchCandidates !== '2378' && this.searchCandidates !== '5763'){
    alert('Esse candidato não existe! Insira o número correto.');
   }
   else{
    alert('FIM!');
   }


   if(this.searchCandidates == '0'){
    this.blank++;
    console.log('em branco: ', this.blank );
  }

  if(this.searchCandidates == '1256'){
    this.candidate1++;
    // console.log('candidato 1: ', this.candidate1 );
  }

  if(this.searchCandidates == '2378'){
    this.candidate2++;
    // console.log('candidato 2: ',this.candidate2);
  }

  if(this.searchCandidates == '5763'){
    this.candidate3++;
    // console.log('candidato 3: ',this.candidate1);
  }

  this.count =  this.candidate1 + this.candidate2 + this.candidate3 + this.blank;

  // console.log('Votos apurados: ', this.count);

  this.clearSearch();
  }



}
