import { free_fluid_amount } from '../constants/index';

export let map = new Map([
    ["None", free_fluid_amount.values.None],
    ["Minimal", free_fluid_amount.values.Minimal],
    ["Moderate", free_fluid_amount.values.Moderate],
    ["Significant", free_fluid_amount.values.Significant],
])
