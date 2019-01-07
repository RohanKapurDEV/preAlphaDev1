import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dev-room', pathMatch: 'full' },
  { path: 'dev-room', loadChildren: './pages/dev-room/dev-room.module#DevRoomPageModule' },
  { path: 'finger-print', loadChildren: './pages/rooms/finger-print/finger-print.module#FingerPrintPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
