import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryModule } from './modules/diary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DiaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
