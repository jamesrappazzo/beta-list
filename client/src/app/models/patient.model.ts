import { Pregnancy } from './pregnancy.model';
import { Presentation } from './presentation.model';
import { TransvaginalUltrasound } from './transvaginal-ultrasound.model';
import { BetaReading } from './beta-reading.model';
import { MethotrexateDose } from './methotrexate-dose.model';
import { PathologyResults } from './pathology-results.model';
import { PatientInteraction } from './patient-interaction.model';
import { FollowUpPlan } from './follow-up-plan.model';
import { GeneralPatientDetails } from './general-patient-details.model';
export interface ObjectId {
    $oid: string;
}
export interface Patient {
    _id: ObjectId;
    general_patient_details: GeneralPatientDetails;
    pregnancy: Pregnancy;
    presentation: Presentation;
    transvaginal_ultrasound: TransvaginalUltrasound[];
    beta_readings: BetaReading[];
    methotrexate_doses: MethotrexateDose[];
    pathology_results: PathologyResults;
    patient_interactions: PatientInteraction[];
    follow_up_plans: FollowUpPlan[];
}
