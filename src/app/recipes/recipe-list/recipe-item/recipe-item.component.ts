import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 @Input() index:number;


 constructor(private recipeService: RecipeService){}

 ngOnInit() {
   
 }


 
}
