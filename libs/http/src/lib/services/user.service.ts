import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../interfaces/data/user.interface';
import { UserHttpService } from '../interfaces/services/user-service.interface';

const jon: User = {
  id: 1,
  firstName: 'Jon',
  lastName: 'Snow',
  email: 'jon.snow@got.com',
};

const jay: User = {
  id: 2,
  firstName: 'Jay',
  lastName: 'Zip',
  email: 'jay.zip@99problems.com',
};

const delayInSeconds = 2;
const delayInMilliseconds = delayInSeconds * 1000;

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserHttpService {
  listUsers(): Observable<User[]> {
    console.log('http call to get users');

    return of([jon, jay]).pipe(delay(delayInMilliseconds));
  }
}
