import { User, UserService } from '@angular-routing-examples/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';

export const listUsersResolver: ResolveFn<User[]> = ():
  | Observable<User[]>
  | Promise<User[]>
  | User[] => {
  const userService = inject(UserService);

  return userService.listUsers();
};
