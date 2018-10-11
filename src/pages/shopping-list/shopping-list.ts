import { IngredientService } from './../../services/ingredient';
import { Ingredient } from './../../model/ingredient';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ingredientList: Ingredient[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private ingredientService: IngredientService) {
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad ShoppingListPage');
    this.loadItems();
  }

  onSubmit(formValue: NgForm){
    this.ingredientService.addIngredient(formValue.value.ingredientName,formValue.value.amount);
    formValue.reset();
    this.loadItems();
  }

  removeIngredient(ingredient: Ingredient){
    let alert = this.alertCtrl.create({
      title: 'Remove',
      subTitle: 'Are you sure?',
      message: "Remove the Ingredient '"+ingredient.ingredientName+"' from the list?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            this.ingredientService.removeIngredient(ingredient);
            this.loadItems();
          }
        }
      ]
    })
    alert.present();
  }

  private loadItems(){
    this.ingredientList = this.ingredientService.getIngredients();
  }
}
