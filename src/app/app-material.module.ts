import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { MatButtonModule }        from '@angular/material/button';
import { MatTableModule }         from '@angular/material/table';
import { MatIconModule }          from '@angular/material/icon';
import { MatMenuModule }          from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class AppMaterialModule { }
