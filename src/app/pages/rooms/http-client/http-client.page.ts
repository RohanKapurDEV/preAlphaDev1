import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { tokenData } from '../interfaces/tokenDataInterface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.page.html',
  styleUrls: ['./http-client.page.scss'],
})
export class HttpClientPage implements OnInit {

  readonly kyberMainnetTokens: string = 'https://tracker.kyber.network/api/tokens/supported';
  tokenData: Observable<tokenData[]>;
  private loading: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  } 

  getKyberPairRates() {
    this.loading = true;
    this.tokenData = this.http.get<tokenData[]>(this.kyberMainnetTokens);
    this.loading = false;
  }

  goToDashboard() {
    this.router.navigateByUrl('/')
  }

}
