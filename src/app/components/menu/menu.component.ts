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

  constructor(private menuService:MenuService) { }


  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

}
