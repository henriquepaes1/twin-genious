import { Component } from '@angular/core';
import { MqttClientServiceService } from './services/mqtt-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private mqttservice: MqttClientServiceService) { 
    this.mqttservice = mqttservice;
    this.mqttservice.createConnection();
    this.mqttservice.doSubscribe('leds/');
    this.mqttservice.doSubscribe('ganhou/');
    this.mqttservice.doSubscribe('perdeu/');
  }
  title = 'front-twin-genious';
}
