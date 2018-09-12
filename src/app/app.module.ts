import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImagesProvider } from '../providers/images';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp({ //ADICIONAR ISSO AO NOVO PROJETO
    apiKey: "AIzaSyBeZTmrXdK1GrOmnYbmk7vX8zymr-Iix7M",
    authDomain: "meu-projeto-incrivel-c359d.firebaseapp.com",
    databaseURL: "https://meu-projeto-incrivel-c359d.firebaseio.com",
    projectId: "meu-projeto-incrivel-c359d",
    storageBucket: "meu-projeto-incrivel-c359d.appspot.com",
    messagingSenderId: "183478652610"
  }),
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider,
    Camera,
    FileTransfer
  ]
})
export class AppModule {}
