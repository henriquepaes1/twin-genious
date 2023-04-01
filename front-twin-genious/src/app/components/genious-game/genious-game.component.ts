import { ParsedEvent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genious-game',
  templateUrl: './genious-game.component.html',
  styleUrls: ['./genious-game.component.css']
})
export class GeniousGameComponent implements OnInit {

  constructor() { 
  }

  _gui = {
    pads: document.querySelectorAll(".game__pad")
  }

  ngOnInit(): void {

  }

  acenderPad(event: Event){
    console.log("acendeu");
    (event.target as Element).classList.add("game__pad--active")

  }

  apagarPad(event: Event){
    console.log("apagar");
    
    (event.target as Element).classList.remove("game__pad--active")
   
    
  }

}
