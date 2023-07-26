import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { GET_DEMANDE_DETAILS_API, CREATE_DEMANDE_API, LOGIN_API, DELETE_DEMANDE, REGISTER_API } from 'src/app/core/constants/api.constants';
import { AccessTokenLocalStorage } from 'src/app/core/constants/enums';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { setConnectedUser } from 'src/app/store/userFlow/user.action';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    _http = inject(HttpClient);
    _router = inject(Router);
    _store = inject(Store<AppStateInterface>)
    currentAccessTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')

    constructor() {
        const token = localStorage.getItem(AccessTokenLocalStorage)
        this.currentAccessTokenSubject.next(token as string)
    }

    getDemandeDetails(): Observable<any> {
        return this._http.get<any>(`${GET_DEMANDE_DETAILS_API}`).pipe(
            map((elem: any) => {
                let obj = [
                    {
                        children: [
                            {
                                data: elem.data[0],
                                children: [],
                                parent: null
                            }
                        ],
                        data: elem.data[0],
                        // elem.data.map((subElem: any) => {
                        //   console.log('subElement ======> ', elem.data[0])
                        //   return {
                        //     email: subElem.email,
                        //     name: subElem.name,
                        //     type: subElem.type,
                        //     description: subElem.description,
                        //     _id: subElem._id
                        //   }
                        // }),
                        parent: null
                    }
                ]
                console.log('objjjjjjjjjjjjj: ', obj)
                return Promise.resolve(obj)
            })
        )
    }

    login(loginDto: LoginDto): Observable<any> {
        return this._http.post<any>(LOGIN_API, loginDto).pipe(
            map(res => {
                // login successful if there's a jwt token in the response
                const tt: any = res.data;
                if (tt && tt.token) {
                    this.successLogin(tt, tt.token);
                    return tt;
                } else {
                    return null;
                }
            }),
            // catchError((error) => this.handleError(error))
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

    deleteDemande(id: string): Observable<any> {
        return this._http.delete<any>(`${DELETE_DEMANDE}/${id}`);
    }

    createDemande(demandeDto: DemandeDto): Observable<DemandeDto> {
        return this._http.post<DemandeDto>(CREATE_DEMANDE_API, demandeDto);
    }

    updateDemande(demandeDto: DemandeDto): Observable<DemandeDto> {
        return this._http.post<DemandeDto>(CREATE_DEMANDE_API, demandeDto);
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

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                email: 'f230fh0g3bbbb',
                name: 'Bamboo Watchs',
                description: 'Product Descrifffffffffption',
                type: 'Accessories',
                orders: [
                    {
                        review: '1000-0',
                    },
                ]
            },
            {
                id: '1000',
                email: 'f230fh0g3aaaaaa',
                name: 'Bamboo Watch',
                description: 'Product Description',
                type: 'Accessoriess',
                orders: [
                    {
                        review: '1000-0',
                    },
                ]
            },

        ];
    }

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }


}
