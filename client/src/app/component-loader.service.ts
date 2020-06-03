import { Injectable } from '@angular/core';
import { UserFormComponent } from './users/components/user-form/user-form.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() { }

  getComponent(componentName: string) {
    if (componentName == "UserFormComponent") {
      return UserFormComponent;
    }
    else{
      return "";
    }
  }
}
