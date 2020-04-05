import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, map, tap, distinctUntilChanged } from 'rxjs/operators';
import { PatientsService } from './patients.service';
import { Patient } from '../models/patient.model';
import { GeneralPatientDetails } from '../models/general-patient-details.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActivePatientStoreService {


  constructor(private patientsService: PatientsService) {
  }

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly ActivePatient = new BehaviorSubject<Patient>(null);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly activePatient$: Observable<Patient> = this.ActivePatient.asObservable();
  readonly generalPatientDetails$: Observable<GeneralPatientDetails> = this.activePatient$
    .pipe(
      map(patient => patient.general_patient_details)
    );

  // // we'll compose the todos$ observable with map operator to create a stream of only completed todos
  // readonly completedTodos$ = this.todos$.pipe(
  //   map(todos => todos.filter(todo => todo.isCompleted))
  // )

  // readonly uncompletedTodos$ = this.todos$.pipe(
  //   map(todos => todos.filter(todo => !todo.isCompleted))
  // )

  // the getter will return the last value emitted in _todos subject
  get activePatient(): Patient {
    return this.ActivePatient.getValue();
  }
  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set activePatient(val: Patient) {
    this.ActivePatient.next(val);
  }

  // the getter will return the last value emitted in _todos subject
  get generalPatientDetails(): GeneralPatientDetails {
    return this.ActivePatient.getValue().general_patient_details;
  }
  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set generalPatientDetails(val: GeneralPatientDetails) {
    const activepatient = this.activePatient;

    activepatient.general_patient_details = val;
    this.ActivePatient.next(activepatient);
  }

}
