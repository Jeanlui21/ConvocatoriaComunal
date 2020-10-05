import {Component, OnInit} from '@angular/core';
import {HomeMenu} from '@app/classes/home-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems: any;

  constructor(private homeClass: HomeMenu) {
    this.menuItems = homeClass.menuList;
  }

  ngOnInit(): void {
  }

  menuAlert(content: string) {
    window.alert('Alerta del item ' + content);
  }

}
