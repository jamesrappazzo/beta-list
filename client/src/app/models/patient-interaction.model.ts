import { patient_interaction_types } from '../constants/index';

export interface PatientInteraction {
    date: string;
    interaction_type: patient_interaction_types.values;
    options: any;
}

