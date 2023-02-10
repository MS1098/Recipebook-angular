import { EventEmitter,Injectable } from "@angular/core";
import { Env } from "../../utils/config";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService{
    recipeSelected= new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Dal-Makhni', 'Soak both ¾ cup whole urad dal (whole black gram).....',Env.imageUrl,
        [
          new Ingredients('Oil',1),
          new Ingredients('spices',2),
        ]),
        new Recipe('Poha', 'Rinse 1.5 cups thick poha (flattened rice)....', Env.imageUrl,
        [
          new Ingredients('Poha',2),
          new Ingredients('butter',2)
        ]),
      
      ];
      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredients[]){
        this.slService.addIngredients(ingredients);
      }
}