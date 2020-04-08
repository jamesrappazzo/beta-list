import { presenting_symptom as presenting_symptom } from '../constants/index';

export let map = new Map([
    ['Abdominal Pain/Cramping', presenting_symptom.values.cramps],
    ['Vaginal Bleeding', presenting_symptom.values.bleeding],
    ['Other', presenting_symptom.values.Other],
]);
