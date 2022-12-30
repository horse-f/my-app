import { delay, of, switchMap, tap, throwError } from 'rxjs';

export class UsersService {
    static getProfile = (user) => {

    };

    static getContacts = () => {
        return of([
            '1',
            '2',
            '3'
        ]).pipe(
            delay(5000)
        );
    };
}