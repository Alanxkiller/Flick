import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeComponent } from 'angularx-qrcode';
import { EnvioUrlService } from '../envio-url.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent {

  title = 'QrPrueba';
  public myAngularxQrCode: string = '';
  levelArray: string[] = ['L', 'M', 'Q', 'H'];
  linkArray: any;


  public level: 'L' | 'M' | 'Q' | 'H';
  public link: string = "";
  public qrCodeDownloadLink: SafeUrl = '';

  constructor(private envioUrlService: EnvioUrlService) {
    this.myAngularxQrCode =
      'https://www.youtube.com/watch?v=eUP3hlBel5I';
    this.level = 'L';
    this.link =
      'https://www.youtube.com/watch?v=eUP3hlBel5I';
  }

  ngOnInit() {
    this.envioUrlService.obtenerVideo().subscribe(data => (this.linkArray = data));
  }

  changeCode() {
    
    
    this.envioUrlService.obtenerVideo().subscribe(data => (this.linkArray = data));

    console.log(this.linkArray.trailer);
  
    let newLevel = Math.floor(Math.random() * 4);    
    this.link = this.linkArray.trailer;
    
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