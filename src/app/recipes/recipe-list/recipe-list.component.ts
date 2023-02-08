import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { Env } from "../../../utils/config"
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe of Dal-Makhni', 'Soak both ¾ cup whole urad dal (whole black gram) and ¼ cup rajma (kidney beans) overnight in enough water for 8 to 9 hours. Drain them well. The below photo shows the soaked whole urad dal and rajma.',Env.imageUrl),
    new Recipe('Poha', 'Rinse 1.5 cups thick poha (flattened rice) in water until they soften. Use a strainer or colander to rinse these light rice flakes.', Env.imageUrl),
    // new Recipe('Upma', ' Prep the ingredients first to make upma recipe. Take 1 cup rava (fine variety) and set it aside. Next gather the aromatics, lentils, nuts, spices and herbs ready. You will need: ⅓ cup finely chopped onions 1 teaspoon chopped green chillies 1 teaspoon finely chopped ginger 2 tablespoons coriander leaves (cilantro)', Env.imageUrl)
  ];
  
  constructor() {

  }

  ngOnInit() {
    console.log(this.recipes)
  }

  onRecipeSelected(recipe: Recipe){
   this.recipeWasSelected.emit(recipe)
  }
}
