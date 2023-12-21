import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodByTag(tag:string){
    return tag ==='All'? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
}
