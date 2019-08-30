import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {
  pages: {
    title: string;
    url: string;
  }[] = [
    {
      title: 'Food Search',
      url: '/tab1',
    },
    {
      title: 'Food Detail',
      url: '/tab2',
    },
    {
      title: 'Favorites',
      url: '/tab3',
    },
  ];

  selectedPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }


}
