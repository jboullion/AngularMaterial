import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class MaterialModule {}
