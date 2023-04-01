import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modo',
  templateUrl: './modo.component.html',
  styleUrls: ['./modo.component.css']
})
export class ModoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dificuldade(){
    this.router.navigateByUrl("/dificuldade")

  }

}
