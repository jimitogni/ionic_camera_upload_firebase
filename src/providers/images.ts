import { FileTransfer } from '@ionic-native/file-transfer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ImagesProvider Provider');
  }

}
