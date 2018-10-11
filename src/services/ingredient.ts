import { Ingredient } from './../model/ingredient';
export class IngredientService {

    private ingredientList: Ingredient[] = [];

    addIngredient(ingredientName: string, amount: number){
        this.ingredientList.push(new Ingredient(ingredientName,amount));
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredientList.push(...ingredients);
    }

    removeIngredient(ingredient:Ingredient){
        let position = this.ingredientList.findIndex((ingredientEl:Ingredient) => {
            return ingredient.ingredientName == ingredientEl.ingredientName;
        });
        this.ingredientList.splice(position,1);
    }

    getIngredients(){
        return this.ingredientList.slice();
    }
}