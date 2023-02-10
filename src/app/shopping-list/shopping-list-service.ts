import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{
  ingredientsChanged=new EventEmitter<Ingredients[]>();

   private ingredients: Ingredients[]=[
        new Ingredients('Apples',6),
        new Ingredients('Tomatoes',15),
       ];

    

       getIngredients(){
        return this.ingredients.slice()
       }
       addIngredient(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
       }
       addIngredients(ingredients:Ingredients[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
       }
}