import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent1 } from './practice1.component';
import { RouterModule, Routes } from '@angular/router';



export const childroutes: Routes = [
  { path: '', component: PracticeComponent1}
 
];

@NgModule({
  declarations: [PracticeComponent1],
  imports: [
    CommonModule,
    RouterModule.forChild(childroutes)

  ],
  exports: [PracticeComponent1]
})
export class PracticeModule1 { }
