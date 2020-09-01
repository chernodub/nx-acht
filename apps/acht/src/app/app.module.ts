import { CommonUiButtonsModule } from "@acht/common/ui-buttons";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@acht/book').then(m => m.BookModule),
  }
];

/** App module. */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes), HttpClientModule, CommonUiButtonsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
