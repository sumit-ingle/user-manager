import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components';
import { UserFormComponent } from './components/user-form/user-form.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalDialogModule } from '../modal-dialog/modal-dialog.module';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    ModalDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalDialogComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
