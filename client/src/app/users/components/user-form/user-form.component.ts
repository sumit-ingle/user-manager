import {
  Component, Input, OnInit,
  ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef, Renderer2, AfterContentInit, Output, EventEmitter
} from '@angular/core';
import { User } from 'client/src/app/models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() data: any;
  @Output() save = new EventEmitter<any>();
  public user: User;
  public mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.user = { ...this.data.userModel };
  }

  onSubmit() {
    this.save.emit(this.user);
  }

}
