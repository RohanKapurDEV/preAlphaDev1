import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router'

@Component({
  selector: 'app-finger-print',
  templateUrl: './finger-print.page.html',
  styleUrls: ['./finger-print.page.scss'],
})
export class FingerPrintPage implements OnInit {

  constructor(private faio: FingerprintAIO, private router: Router) { }

  ngOnInit() {
  }

  private showAuthDialog() {
    this.faio.show({
      clientId: 'DEX-Test-Env',
      clientSecret: 'dex',
      localizedFallbackTitle: 'Use Pin',
      localizedReason: 'Please authenticate' 
    }).then(result => {
      this.router.navigateByUrl('/dev-room')
    }).catch(err => {
      console.log(err)
    })
  }

}
