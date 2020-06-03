import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { ModalDialogComponent } from './modal-dialog.component';
import { DatacontainerDirective } from './datacontainer.directive';

@NgModule({
  declarations: [
    ModalDialogComponent,
    ModalDirective,
    DatacontainerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDirective
  ]
})
export class ModalDialogModule { }
