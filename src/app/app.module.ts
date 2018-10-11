import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { EditRecipePageModule } from './../pages/edit-recipe/edit-recipe.module';
import { RecipePageModule } from './../pages/recipe/recipe.module';
import { ShoppingListPageModule } from '../pages/shopping-list/shopping-list.module';
import { RecipesPageModule } from './../pages/recipes/recipes.module';

import { IngredientService } from './../services/ingredient';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsPageModule,
    ShoppingListPageModule,
    RecipesPageModule,
    RecipePageModule,
    EditRecipePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IngredientService
  ]
})
export class AppModule {}