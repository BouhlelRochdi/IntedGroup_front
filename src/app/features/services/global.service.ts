import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { GET_DEMANDE_DETAILS_API, CREATE_DEMANDE_API, LOGIN_API, DELETE_DEMANDE, REGISTER_API, CURRENT_USER_API, UPDATE_DEMANDE_API, GET_DEMANDE_BY_USER_API } from 'src/app/core/constants/api.constants';
import { AccessTokenLocalStorage } from 'src/app/core/constants/enums';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { getCurrentUser, setConnectedUser } from 'src/app/store/userFlow/user.action';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    _http = inject(HttpClient);
    _router = inject(Router);
    _store = inject(Store<AppStateInterface>)
    currentAccessTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')
    darkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor() {
        const token = localStorage.getItem(AccessTokenLocalStorage)
        this.currentAccessTokenSubject.next(token as string)
        this._store.dispatch(getCurrentUser())
        console.log('serviceeeeeeeeeeeeee')
        localStorage.getItem('isDarkMode') ? this.darkMode$.next(JSON.parse(localStorage.getItem('isDarkMode') as string)) : this.darkMode$.next(false);
        this.changeTheme();
    }

    setIsDarkMode(isDarkMode: boolean) {
        this.darkMode$.next(isDarkMode)
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    }

    changeTheme() {
        this.darkMode$.subscribe(elem => {
            
        console.log('dark mode : ', this.darkMode$.value)
            if (!elem) {
                document.body.classList.add('dark')
            }else{
                document.body.classList.remove('dark')
            }
        })
    }

    getDemandeDetails(): Observable<any> {
        return this._http.get<any>(`${GET_DEMANDE_DETAILS_API}`);
    }

    getDemandeByUser(): Observable<any> {
        return this._http.get<any>(`${GET_DEMANDE_BY_USER_API}`);
    }

    login(loginDto: LoginDto): Observable<any> {
        return this._http.post<any>(LOGIN_API, loginDto).pipe(
            map(res => {
                console.log('res: ', res)
                const tt: any = res.data;
                if (tt && tt.token) {
                    this.successLogin(tt, tt.token);
                    return tt;
                } else {
                    return null;
                }
            }),
        );
    }

    successLogin(userData: LoginDto, access_token: string) {
        localStorage.setItem(AccessTokenLocalStorage, access_token);
        this.currentAccessTokenSubject.next(access_token);
        this._store.dispatch(setConnectedUser({ user: userData }))
    }

    logout() {
        localStorage.removeItem(AccessTokenLocalStorage);
        this.currentAccessTokenSubject.next('');
        this._router.navigate(['/login']);
    }

    signup(loginDto: LoginDto): Observable<any> {
        return this._http.post<any>(REGISTER_API, loginDto);
    }

    getCurrentUser(): Observable<any> {
        return this._http.get<any>(`${CURRENT_USER_API}`);
    }

    deleteDemande(id: string): Observable<any> {
        return this._http.delete<any>(`${DELETE_DEMANDE}/${id}`);
    }

    createDemande(demandeDto: DemandeDto): Observable<DemandeDto> {
        return this._http.post<DemandeDto>(CREATE_DEMANDE_API, demandeDto);
    }

    updateDemande(_id: string, demandeDto: string): Observable<DemandeDto> {
        return this._http.put<DemandeDto>(UPDATE_DEMANDE_API + '/' + _id, { agentResponse: demandeDto });
    }


    // private handleError(error: HttpErrorResponse) {
    //   if (error.error instanceof ErrorEvent) {
    //     console.error('An error occurred:', error.error.message);
    //   } else {
    //     console.error(
    //       `Backend returned code ${error.status}, ` +
    //       `body was: ${error.error}`);
    //   }
    //   return throwError(
    //     'Something bad happened; please try again later.');
    // };
}
