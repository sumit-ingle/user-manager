import { Injectable } from '@angular/core';
import { BaseService } from 'client/src/app/shared/services/base.service';
import { URL_USER_API } from 'client/src/app/shared/constants/url.constants';
import { Observable } from 'rxjs';
import { User } from 'client/src/app/models/user';

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private baseService: BaseService) { }

  getAllUsers(): Observable<User[]> {
    return this.baseService.getData(URL_USER_API, {});
  }

  updateUser(user: User) {
    const updateUserURL = URL_USER_API + "/" + user.email;
    return this.baseService.putData(updateUserURL, user, {});
  }

  addUser(user: User) {
    return this.baseService.postData(URL_USER_API, user, {});
  }
}
