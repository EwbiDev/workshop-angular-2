import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items = ['sean', 'bob', 'aj', 'elliot'];

  constructor() {}

  getItems() {
    return this.items;
  }
}
