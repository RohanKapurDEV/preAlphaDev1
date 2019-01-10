import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dev-room', pathMatch: 'full' },
  { path: 'dev-room', loadChildren: './pages/dev-room/dev-room.module#DevRoomPageModule' },
  { path: 'finger-print', loadChildren: './pages/rooms/finger-print/finger-print.module#FingerPrintPageModule' },
  { path: 'sqlite', loadChildren: './pages/rooms/sqlite/sqlite.module#SqlitePageModule' },
  { path: 'qr-code-reader', loadChildren: './pages/rooms/qr-code-reader/qr-code-reader.module#QrCodeReaderPageModule' },
  { path: 'http-client', loadChildren: './pages/rooms/http-client/http-client.module#HttpClientPageModule' },
  { path: 'secure-store', loadChildren: './pages/rooms/secure-store/secure-store.module#SecureStorePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
