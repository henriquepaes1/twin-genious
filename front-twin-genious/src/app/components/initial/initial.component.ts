import { MqttClientServiceService } from './../../services/mqtt-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  mqttservice: MqttClientServiceService

  constructor(private router: Router, mqttservice: MqttClientServiceService) { 
    this.mqttservice = mqttservice;
    this.mqttservice.createConnection();
    this.mqttservice.doSubscribe('leds/');
    this.mqttservice.doSubscribe('ganhou/');
    this.mqttservice.doSubscribe('perdeu/');
    console.log("abc");
  }

  ngOnInit(): void {
  }

  startGame(){
    this.mqttservice.doPublish('iniciar/', '1');
    this.router.navigateByUrl("/modo")
  }

}
