import { ActionBarComponent } from '~/app/components/action-bar/action-bar.component';
import { ExtendedLabelComponent } from '~/app/components/extended-label/extended-label.component';
import { RecipeDetailsComponent } from '~/app/components/recipe-details/recipe-details.component';
import { RecipesListComponent } from '~/app/components/recipes-list/recipes-list.component';
import { ExtendedButtonComponent } from '~/app/components/extended-button/extended-button.component';
import { RecipeSummaryComponent } from '~/app/components/recipe-summary/recipe-summary.component';
import { RecipeBasicInfoComponent } from '~/app/components/recipe-basic-info/recipe-basic-info.component';
import { RecipeInstructionsComponent } from '~/app/components/recipe-instructions/recipe-instructions.component';
import { RecipeInstructionsStepperComponent } from '~/app/components/recipe-instructions-stepper/recipe-instructions-stepper.component';

export const components = [
    ActionBarComponent,
    RecipeBasicInfoComponent,
    ExtendedLabelComponent,
    ExtendedButtonComponent,
    RecipeDetailsComponent,
    RecipesListComponent,
    RecipeSummaryComponent,
    RecipeInstructionsComponent,
    RecipeInstructionsStepperComponent
];

export * from '~/app/components/action-bar/action-bar.component';
export * from '~/app/components/extended-label/extended-label.component';
export * from '~/app/components/recipe-details/recipe-details.component';
export * from '~/app/components/recipes-list/recipes-list.component';
export * from '~/app/components/extended-button/extended-button.component';
export * from '~/app/components/recipe-summary/recipe-summary.component';
export * from '~/app/components/recipe-basic-info/recipe-basic-info.component';
export * from '~/app/components/recipe-instructions/recipe-instructions.component';
export * from '~/app/components/recipe-instructions-stepper/recipe-instructions-stepper.component';
