import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from '../diary/diary.component';
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input";
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';

const MaterialModules = [
  MatCardModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule
]

@NgModule({
  declarations: [
    DiaryComponent
  ],
  imports: [
    CommonModule,
    PickerModule,
    FormsModule,
    MaterialModules
  ],
  exports: [MaterialModules]
})
export class DiaryModule { }
