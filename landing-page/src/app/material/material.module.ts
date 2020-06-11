import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
