import { CubicDimensions } from './dimensions.model';

export interface Uterus {
    orientation: string;
    dimensions: CubicDimensions;
    endometrial_thickness: number;
}
