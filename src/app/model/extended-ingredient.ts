import { Consistency } from '~/app/model/consistency';
import { Measures } from '~/app/model/measures';

export interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: Consistency;
    name: string;
    original: string;
    originalString: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    metaInformation: string[];
    measures: Measures;
}
