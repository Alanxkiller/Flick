import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent {

  title = 'QrPrueba';
  public myAngularxQrCode: string = '';
  levelArray: string[] = ['L', 'M', 'Q', 'H'];
  linkArray: string[] = [
    'https://www.youtube.com/watch?v=hVR5KK2T8zQ&list=RD08Grf4QSUys&index=2',
    'https://www.youtube.com/watch?v=wxIU03Llxwg&list=RDGMEM2VCIgaiSqOfVzBAjPJm-ag&index=14',
    'https://www.youtube.com/watch?v=Q0Dhod-hiIM&list=RDGMEM2VCIgaiSqOfVzBAjPJm-ag&index=13&pp=8AUB',
    'https://www.youtube.com/watch?v=NPpELzyP4rw&list=RDGMEM2VCIgaiSqOfVzBAjPJm-ag&index=15&pp=8AUB'
  ];


  public level: 'L' | 'M' | 'Q' | 'H';
  public link: string = "";
  public qrCodeDownloadLink: SafeUrl = '';

  constructor() {
    this.myAngularxQrCode =
      'https://www.youtube.com/watch?v=hVR5KK2T8zQ&list=RD08Grf4QSUys&index=2';
    this.level = 'L';
    this.link =
      'https://www.youtube.com/watch?v=NPpELzyP4rw&list=RDGMEM2VCIgaiSqOfVzBAjPJm-ag&index=15&pp=8AUB';
  }

  changeCode() {
    let newLevel = Math.floor(Math.random() * 4);    
    this.link = this.linkArray[newLevel];
    
    if(newLevel == 0){
      this.updateLevel('L');
    }else if(newLevel == 1){
      this.updateLevel("M");
    }else if(newLevel == 2){
      this.updateLevel("Q");
    }else if(newLevel == 3){
      this.updateLevel("H");
    }
  }

  updateLevel(newValue: 'L' | 'M' | 'Q' | 'H') {
    this.level = newValue;
  }
  

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}