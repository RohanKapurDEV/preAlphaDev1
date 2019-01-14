import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev-room',
  templateUrl: './dev-room.page.html',
  styleUrls: ['./dev-room.page.scss'],
})
export class DevRoomPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const observable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      setTimeout(() => {
        observer.next(5);
        observer.complete();
      }, 1000);
    })
    
    console.log('Before subscription to observable...');
    observable.subscribe({
      next: x => console.log('Got value ' + x ),
      error: x => console.log('Got an error'),
      complete: x => console.log('Complete')
    })
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
  
  private goToSecureStorage() {
    this.router.navigateByUrl('/secure-store');
  }
}
