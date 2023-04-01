import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dificuldade',
  templateUrl: './dificuldade.component.html',
  styleUrls: ['./dificuldade.component.css']
})
export class DificuldadeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startGame(){
    this.router.navigateByUrl("/jogo")
  }

}
