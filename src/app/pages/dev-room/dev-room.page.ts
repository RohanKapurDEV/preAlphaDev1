import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dev-room',
  templateUrl: './dev-room.page.html',
  styleUrls: ['./dev-room.page.scss'],
})
export class DevRoomPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private goToBioAuth() {
    this.router.navigateByUrl('/finger-print');
  }

  private goToSql() {
    this.router.navigateByUrl('/sqlite');
  }

  private goToHttpClient() {
    this.router.navigateByUrl('/http-client');
  }

  private goToQrCodeReader() {
    this.router.navigateByUrl('/qr-code-reader');
  }
}
