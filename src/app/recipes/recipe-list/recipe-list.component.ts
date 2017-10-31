import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Braised Jackrabbit', 'This is the best rabbit you will ever taste', 'http://images.media-allrecipes.com/userphotos/250x250/639021.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
