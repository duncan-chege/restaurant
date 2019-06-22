import { Injectable } from '@angular/core';
import { Menu } from '../models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu():Menu[] {
    return [
      {
        name: 'Salad',
        choices: [
          { name: 'Santa Fe' },
          { name: 'Greek' },
          { name: 'Asian' },
        ],
        related: [
          {
            name: 'Dressing',
            choices: [
              { name: 'Italian' },
              { name: 'Blue Cheese' },
              { name: 'Ranch' },
            ],
          },
          {
            name: 'Bread', choices: [
              { name: 'Italian' },
              { name: 'Flat' },
              { name: 'Sourdough' },
            ]
          }
        ],
        clicked: true,
        expand: true
      },
      {
        name: 'Entree',
        choices: [
          { name: 'Steak' },
          { name: 'Salmon' },
          { name: 'Rice' },
        ],
        related: [
        ],
        clicked: true,
        expand: true
      },
      {
        name: 'Soup',
        choices: [
          { name: 'Minestrone' },
          { name: 'Hot and sour' },
          { name: 'Miso' },
        ],
        related: [
          {
            name: 'Bread',
            choices: [
              { name: 'Breadsticks'}
            ]
          }
        ],
        clicked: true,
        expand: true
      }
    ];
  }
}
