import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { MatButtonModule }        from '@angular/material/button';
import { MatTableModule }         from '@angular/material/table';
import { MatIconModule }          from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
