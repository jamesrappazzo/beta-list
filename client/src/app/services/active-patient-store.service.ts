import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, map, tap, distinctUntilChanged } from 'rxjs/operators';
import { PatientsService } from './patients.service';
import { Patient } from '../models/patient.model';
import { GeneralPatientDetails } from '../models/general-patient-details.model';
import { Observable } from 'rxjs';
import { BetaReading } from '../models/beta-reading.model';
import { PathologyResults } from '../models/pathology-results.model';
import { Pregnancy } from '../models/pregnancy.model';
import { Presentation } from '../models/presentation.model';
import { MethotrexateDose } from '../models/methotrexate-dose.model';
import { TransvaginalUltrasound } from '../models/transvaginal-ultrasound.model';
import { PatientInteraction } from '../models/patient-interaction.model';

@Injectable({ providedIn: 'root' })
export class ActivePatientStoreService {


  constructor() {
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
  readonly betaReadings$: Observable<BetaReading[]> = this.activePatient$
    .pipe(
      map(patient => patient.beta_readings)
    );
  readonly methotrexateDoses$: Observable<MethotrexateDose[]> = this.activePatient$
    .pipe(
      map(patient => patient.methotrexate_doses)
    );
  readonly pathologyResults$: Observable<PathologyResults> = this.activePatient$
    .pipe(
      map(patient => patient.pathology_results)
    );
  readonly pregnancy$: Observable<Pregnancy> = this.activePatient$
    .pipe(
      map(patient => patient.pregnancy)
    );
  readonly presentation$: Observable<Presentation> = this.activePatient$
    .pipe(
      map(patient => patient.presentation)
    );
  readonly transvaginalUltrasounds$: Observable<TransvaginalUltrasound[]> = this.activePatient$
    .pipe(
      map(patient => patient.transvaginal_ultrasound)
    );
  readonly patientInteractions$: Observable<PatientInteraction[]> = this.activePatient$
    .pipe(
      map(patient => patient.patient_interactions)
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

  get generalPatientDetails(): GeneralPatientDetails {
    return this.ActivePatient.getValue().general_patient_details;
  }

  set generalPatientDetails(val: GeneralPatientDetails) {
    const activepatient = this.activePatient;

    activepatient.general_patient_details = val;
    this.ActivePatient.next(activepatient);
  }

  get betaReadings(): BetaReading[] {
    return this.ActivePatient.getValue().beta_readings;
  }

  set betaReadings(val: BetaReading[]) {
    const activepatient = this.activePatient;

    activepatient.beta_readings = val;
    this.ActivePatient.next(activepatient);
  }

  get methotrexateDoses(): MethotrexateDose[] {
    return this.ActivePatient.getValue().methotrexate_doses;
  }

  set methotrexateDoses(val: MethotrexateDose[]) {
    const activepatient = this.activePatient;

    activepatient.methotrexate_doses = val;
    this.ActivePatient.next(activepatient);
  }
  get pathologyResults(): PathologyResults {
    return this.ActivePatient.getValue().pathology_results;
  }

  set pathologyResults(val: PathologyResults) {
    const activepatient = this.activePatient;

    activepatient.pathology_results = val;
    this.ActivePatient.next(activepatient);
  }

  get pregnancy(): Pregnancy {
    return this.ActivePatient.getValue().pregnancy;
  }

  set pregnancy(val: Pregnancy) {
    const activepatient = this.activePatient;

    activepatient.pregnancy = val;
    this.ActivePatient.next(activepatient);
  }

  get presentation(): Presentation {
    return this.ActivePatient.getValue().presentation;
  }

  set presentation(val: Presentation) {
    const activepatient = this.activePatient;

    activepatient.presentation = val;
    this.ActivePatient.next(activepatient);
  }
  get transvaginalUltrasounds(): TransvaginalUltrasound[] {
    return this.ActivePatient.getValue().transvaginal_ultrasound;
  }

  set transvaginalUltrasounds(val: TransvaginalUltrasound[]) {
    const activepatient = this.activePatient;

    activepatient.transvaginal_ultrasound = val;
    this.ActivePatient.next(activepatient);
  }
  get patientInteractions(): PatientInteraction[] {
    return this.ActivePatient.getValue().patient_interactions;
  }

  set patientInteractions(val: PatientInteraction[]) {
    const activepatient = this.activePatient;

    activepatient.patient_interactions = val;
    this.ActivePatient.next(activepatient);
  }
}
