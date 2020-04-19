import { ActionBarComponent } from '~/app/components/action-bar/action-bar.component';
import { ExtendedLabelComponent } from '~/app/components/extended-label/extended-label.component';
import { RecipeDetailsComponent } from '~/app/components/recipe-details/recipe-details.component';
import { RecipesListComponent } from '~/app/components/recipes-list/recipes-list.component';
import { ExtendedButtonComponent } from '~/app/components/extended-button/extended-button.component';

export const components = [
    ActionBarComponent,
    ExtendedLabelComponent,
    ExtendedButtonComponent,
    RecipeDetailsComponent,
    RecipesListComponent
];

export * from '~/app/components/action-bar/action-bar.component';
export * from '~/app/components/extended-label/extended-label.component';
export * from '~/app/components/recipe-details/recipe-details.component';
export * from '~/app/components/recipes-list/recipes-list.component';
