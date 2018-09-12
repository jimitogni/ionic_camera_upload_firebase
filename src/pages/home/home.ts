import { Component } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: any;
  file: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private storage: AngularFireStorage,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  opcoes(){
    let sheet = this.actionSheetCtrl.create({
      title: 'Selecionar origem da imagem',
      buttons:[
        {
          text: 'Pegar foto da Gallery',
          handler: () => {
            this.pegaFoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Triar Foto',
          handler: () => {
            this.pegaFoto(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancela',
          role: 'cancel'
        }
      ]
    });

    sheet.present();
  }

  pegaFoto(sourceType){
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then(imagePath => {
      this.image = 'data:image/jpeg;base64,' + imagePath;
      this.file = imagePath;
    });
  }

  uploadImg(){
    console.log('entrou');
    let loading = this.loading();
    let img = this.image;
    this.storage.ref(`images/${Date.now()}.jpeg`).putString(img, 'data_url').then(
      url => {
        console.log('uploaded', url);
        loading.dismiss();
        this.alert();
      });
  }

  loading(){
    let loading = this.loadingController.create({
      content: 'Aguarde o upload',
      spinner: 'bubbles'
    });

    loading.present();

    return loading;
  }

  alert() {
    let alert = this.alertController.create({
      title: 'Pronto',
      subTitle: 'Upload completo',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
