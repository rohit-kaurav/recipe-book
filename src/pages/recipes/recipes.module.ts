import { RecipesPage } from './recipes';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        RecipesPage
    ],
    imports: [
        IonicPageModule.forChild(RecipesPage)
    ],
    entryComponents: [
        RecipesPage
    ]
})

export class RecipesPageModule {}