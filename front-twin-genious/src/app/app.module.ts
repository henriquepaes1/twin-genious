import { ListenerService } from './services/listener.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeniousGameComponent } from './components/genious-game/genious-game.component';
import { InitialComponent } from './components/initial/initial.component';
import { ModoComponent } from './components/modo/modo.component';
import { DificuldadeComponent } from './components/dificuldade/dificuldade.component';


import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { MqttClientServiceService } from './services/mqtt-client.service';

export const connection: IMqttServiceOptions = {
  hostname: '89027d54046045d3954ec8a3d6c7c9cf.s2.eu.hivemq.cloud',
  port: 8884,
  path: '/mqtt',
  clean: true,// 保留会话
  // connectTimeout: 4000, // 超时时间
  // reconnectPeriod: 4000, // 重连时间间隔
  // 认证信息
  clientId: 'mqttx_597046f4',
  username: 'java-client',
  password: 'garsoft-java',
  protocol: 'wss',
  connectOnCreate: false,
}
@NgModule({
  declarations: [
    AppComponent,
    GeniousGameComponent,
    InitialComponent,
    ModoComponent,
    DificuldadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(connection)
  ],
  providers: [
    MqttClientServiceService,
    ListenerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
