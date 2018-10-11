import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {

  recipeForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(),
      description: new FormControl()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  addRecipe(){
    console.log('form data ',this.recipeForm.value);
  }

  addIngredient(){
    console.log("add ingredient method");
  }
}
