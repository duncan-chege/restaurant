import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu:Menu[];

  primaryMenu = true;
  relatedMenu = true;
  tertiaryMenu = true;

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

  togglePrimary() {
    this.primaryMenu = !this.primaryMenu;
    this.relatedMenu = true;
    this.tertiaryMenu = true;
  }

  toggleSecondary() {
    this.relatedMenu = !this.relatedMenu;
  }

  toggleTertiary() {
    this.tertiaryMenu = !this.tertiaryMenu;
  }

  getPrimary(item) {
    return {
      'collapse': this.primaryMenu
    };
  }

  getSecondary() {
    return {
      'collapse': this.relatedMenu
    };
  }

  getTertiary() {
    return {
      'collapse': this.tertiaryMenu
    };
  }

}
