import { DoctorVisit } from './doctor-visit.model';
import { PhoneCall } from './phone-call.model';
import { EmergencyDepartmentVisit } from './emergency-department-visit.model';

export interface PatientInteraction {
    interaction_date: string;
    doctor_visit: DoctorVisit;
    certified_letter_sent: boolean;
    phone_calls: PhoneCall[];
    emergency_department_visit: EmergencyDepartmentVisit;
}