import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ShoppingListPage } from './shopping-list';

@NgModule({
    declarations: [
        ShoppingListPage
    ],
    imports: [
        IonicPageModule.forChild(ShoppingListPage)
    ],
    entryComponents: [
        ShoppingListPage
    ]
})

export class ShoppingListPageModule {}
