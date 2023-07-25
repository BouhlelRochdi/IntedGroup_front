import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { GET_DEMANDE_DETAILS_API, CREATE_DEMANDE_API, LOGIN_API, DELETE_DEMANDE } from 'src/app/core/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  _http = inject(HttpClient);

  getDemandeDetails(): Observable<any> {
    return this._http.get<any>(`${GET_DEMANDE_DETAILS_API}`);
  }

  login(loginDto: LoginDto): Observable<any> {
    return this._http.post<any>(LOGIN_API, loginDto);
  }

  deleteDemande(id: string): Observable<any> {
    return this._http.delete<any>(`${DELETE_DEMANDE}/${id}`);
  }

  createDemande(demandeDto: LoginDto): Observable<DemandeDto> {
    return this._http.post<DemandeDto>(CREATE_DEMANDE_API, demandeDto);
  }

}
