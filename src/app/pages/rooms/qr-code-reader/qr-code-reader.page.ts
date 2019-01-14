import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx'

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.page.html',
  styleUrls: ['./qr-code-reader.page.scss'],
})
export class QrCodeReaderPage implements OnInit {

  constructor(private qrScanner: QRScanner) { }
  private friendAddress: string;

  ngOnInit() {
  }

  qrButtonClicked(event) {
    var context = this;
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {

        if (status.authorized) {
          // camera permission was granted
          console.log("scanning");
          var ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((scannedAddress: string) => {
            console.log('Scanned address', scannedAddress);
            this.friendAddress = scannedAddress;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            ionApp.style.display = "block";
          });

          // show camera preview
          ionApp.style.display = "none";
          context.qrScanner.show();
          setTimeout(() => {
            ionApp.style.display = "block";
            scanSub.unsubscribe(); // stop scanning
            context.qrScanner.hide();
          }, 8000);
          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          console.log("Denied permission to access camera");
        } else {
          console.log("Something else is happening with the camera");
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}
