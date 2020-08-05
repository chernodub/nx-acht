import { CommonUiButtonsModule } from "@acht/common/ui-buttons";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CommonUiButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
