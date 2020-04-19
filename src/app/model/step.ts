import { Length } from '~/app/model/length';
import { Ent } from '~/app/model/ent';

export interface Step {
    number: number;
    step: string;
    ingredients: Ent[];
    equipment: Ent[];
    length?: Length;
}
