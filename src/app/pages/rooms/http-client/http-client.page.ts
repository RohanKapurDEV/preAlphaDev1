import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { tokenData } from '../interfaces/tokenDataInterface';
import { ethDashboard } from '../interfaces/ethDashboardInterface'
import { Observable } from 'rxjs';
import * as $ from 'jquery';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.page.html',
  styleUrls: ['./http-client.page.scss'],
})
export class HttpClientPage implements OnInit {

  readonly nomicsApiKey: string = '0e9a6df5db1b0d1f8c5d5d6c182019ae';
  readonly kyberMainnetTokens: string = 'https://tracker.kyber.network/api/tokens/supported';
  readonly nomicsEthereumDashEndpoint: string = 'https://api.nomics.com/v1/dashboard?key=' + this.nomicsApiKey;

  readonly etherPrice: string = 'https://api.nomics.com/v1/prices?key=' + this.nomicsApiKey;

  tokenData: Observable<tokenData[]>;
  cryptoData: Observable<ethDashboard[]>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  } 

  getCryptoData() {
    this.cryptoData = this.http.get<ethDashboard[]>(this.nomicsEthereumDashEndpoint)
    console.log(this.cryptoData)
    $('.cryptoDataClass').addClass('animated fadeInRight');
  }

  getKyberPairRates() {
    this.tokenData = this.http.get<tokenData[]>(this.kyberMainnetTokens);
    $('.tokenDataClass').addClass('animated fadeInRight');
  }

  getEtherData() {
    
  }

  goToDashboard() {
    this.router.navigateByUrl('/')
  }

}
