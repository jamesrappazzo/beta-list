import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Patient } from '../models/patient.model';
import { shareReplay } from 'rxjs/operators'

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientService {
//   private patientUrl = 'http://0.0.0.0:8081/patient';
//   constructor(private http: HttpClient) { }

//   getPatient(id: string): Observable<Patient> {
//     const url = `${this.patientUrl}/${id}`;
//     return this.http.get<Patient>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Patient>(`getHero id=${id}`))
//     );
//   }
//   private log(message: String): void {
//     console.log(message)
//   };
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };

//   }
// }


@Injectable({ providedIn: 'root' })
export class PatientsService {
  private readonly apiBaseUrl = 'http://0.0.0.0:8081';

  constructor(private http: HttpClient) { }

  get(id): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiBaseUrl}/patients/${id}`);
  }

}