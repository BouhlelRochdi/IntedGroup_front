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

    successLogin(userData:LoginDto, access_token: string) {
        localStorage.setItem(AccessTokenLocalStorage, access_token);
        this.currentAccessTokenSubject.next(access_token);
        this._store.dispatch(setConnectedUser({user: userData}))
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

    getFileSystemNodesData() {
        return [
            {
                "data": {
                    "name": "Applications",
                    "size": "200mb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Angular",
                            "size": "25mb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Cloud",
                    "size": "20mb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "backup-1.zip",
                            "size": "10mb",
                            "type": "Zip"
                        }
                    },
                    {
                        "data": {
                            "name": "backup-2.zip",
                            "size": "10mb",
                            "type": "Zip"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Desktop",
                    "size": "150kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "note-meeting.txt",
                            "size": "50kb",
                            "type": "Text"
                        }
                    },
                    {
                        "data": {
                            "name": "note-todo.txt",
                            "size": "100kb",
                            "type": "Text"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Documents",
                    "size": "75kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Work",
                            "size": "55kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Expenses.doc",
                                    "size": "30kb",
                                    "type": "Document"
                                }
                            },
                            {
                                "data": {
                                    "name": "Resume.doc",
                                    "size": "25kb",
                                    "type": "Resume"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "Home",
                            "size": "20kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Invoices",
                                    "size": "20kb",
                                    "type": "Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "name": "Downloads",
                    "size": "25mb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Spanish",
                            "size": "10mb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "tutorial-a1.txt",
                                    "size": "5mb",
                                    "type": "Text"
                                }
                            },
                            {
                                "data": {
                                    "name": "tutorial-a2.txt",
                                    "size": "5mb",
                                    "type": "Text"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "Travel",
                            "size": "15mb",
                            "type": "Text"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Hotel.pdf",
                                    "size": "10mb",
                                    "type": "PDF"
                                }
                            },
                            {
                                "data": {
                                    "name": "Flight.pdf",
                                    "size": "5mb",
                                    "type": "PDF"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "name": "Main",
                    "size": "50mb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "bin",
                            "size": "50kb",
                            "type": "Link"
                        }
                    },
                    {
                        "data": {
                            "name": "etc",
                            "size": "100kb",
                            "type": "Link"
                        }
                    },
                    {
                        "data": {
                            "name": "var",
                            "size": "100kb",
                            "type": "Link"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Other",
                    "size": "5mb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "todo.txt",
                            "size": "3mb",
                            "type": "Text"
                        }
                    },
                    {
                        "data": {
                            "name": "logo.png",
                            "size": "2mb",
                            "type": "Picture"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Pictures",
                    "size": "150kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "barcelona.jpg",
                            "size": "90kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "primeng.png",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "prime.jpg",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Videos",
                    "size": "1500mb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "primefaces.mkv",
                            "size": "1000mb",
                            "type": "Video"
                        }
                    },
                    {
                        "data": {
                            "name": "intro.avi",
                            "size": "500mb",
                            "type": "Video"
                        }
                    }
                ]
            }
        ]
    }

    getFilesystem() {
        return Promise.resolve(this.getFileSystemNodesData());
    }


}
