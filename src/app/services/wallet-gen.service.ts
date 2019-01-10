import { Injectable } from '@angular/core';
import { ethers, Wallet } from 'ethers';
import * as bitcoin from 'bitcoinjs-lib'; 

/**
 * The walletGen Service is to allow the creation and import of several different types of wallets.
 * Current support is for Bitcoin and Ethereum. The service also integrates 2 storage mechanisms, one persistant
 * and the other, persistant and highly secure. When returning wallet data from generation of wallet, use SQLite
 * storage for public keys and SecureStorage for private keys.
 * 
 * FORGET ABOUT THIS UNTIL THE DEVROOM IS COMPLETELY FULL AND YOU KNOW EXACTLY WHAT THE FUCK IS GOING ON
 * 
 * Author: Rohan Kapur
 */

@Injectable({
  providedIn: 'root'
})
export class WalletGenService {

  privkey: string; // Remember to wipe definition after use within function for security.
  mnemonic: string; // See above

  constructor() { }

  generateRandomEtherWallet(): Wallet {
    let wallet = ethers.Wallet.createRandom();
    return wallet; // Replace return statements with those that isolate components of the return type for usage in storage mechanisms (e.g secureStore(wallet.privateKey) or something idk)
  }
  
  generateEtherWalletFromMnemonic(): Wallet {
    let input = this.mnemonic;
    let wallet = ethers.Wallet.fromMnemonic(input);
    this.mnemonic = ''; //Wiping cached variable for security
    return wallet; // Replace return statements with those that isolate components of the return type for usage in storage mechanisms (e.g secureStore(wallet.privateKey) or maybe a SQL statemnt (STORE _id, pk, 'ethereum', 'date/time created') something idk)
  }

  generateEtherWalletFromPrivateKey(): Wallet {
    let input = this.privkey;
    let wallet = new ethers.Wallet(input);
    this.privkey = ''; // Wiping cached variable for security
    return wallet; // Replace return statements with those that isolate components of the return type for usage in storage mechanisms (e.g secureStore(wallet.privateKey) or something idk)
  }
}
