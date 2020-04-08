import { free_fluid_amount } from '../constants/index';

export let map = new Map([
    ['None', free_fluid_amount.values.none],
    ['Minimal', free_fluid_amount.values.minimal],
    ['Moderate', free_fluid_amount.values.moderate],
    ['Significant', free_fluid_amount.values.significant],
]);
