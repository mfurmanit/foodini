import { Step } from '~/app/model/step';

export interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}
