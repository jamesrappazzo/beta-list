import { Pregnancy } from './pregnancy.model';
import { Presentation } from './presentation.model';
import { TransvaginalUltrasound } from './transvaginal-ultrasound.model';
import { BetaReading } from './beta-reading.model';
import { MethotrexateDose } from './methotrexate-dose.model';
import { PathologyResults } from './pathology-results.model';
import { PatientInteraction } from './patient-interaction.model';
import { FollowUpPlan } from './follow-up-plan.model';

export interface Patient {
    first_name: string;
    last_name: string;
    medical_record_number: string;
    phone_number: string;
    date_of_birth: string;
    attending_physician_last_name: string;
    pregnancy: Pregnancy;
    presentation: Presentation;
    transvaginal_ultrasound: TransvaginalUltrasound[];
    beta_readings: BetaReading[];
    methotrexate_doses: MethotrexateDose[];
    pathology_results: PathologyResults;
    patient_interactions: PatientInteraction[];
    follow_up_plans: FollowUpPlan[];
}
