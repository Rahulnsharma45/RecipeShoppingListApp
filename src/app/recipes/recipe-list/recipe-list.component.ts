import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg'),
    new Recipe('A test recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

new Recipe('A test recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg')