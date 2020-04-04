import { Parity } from './parity.model';

export interface Presentation {
    gravity: number;
    parity: Parity;
    last_menstrual_period: string;
    presenting_symptoms: string[];
}
