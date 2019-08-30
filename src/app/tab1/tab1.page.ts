import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FoodService } from './../services/food.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private navController: NavController, private foodService: FoodService) {
  }

  navigateRoot() {
    this.navController.navigateRoot('tab2');
  }

  navigateForward() {
    this.navController.navigateForward('tab2');
  }

  ngOnInit() {
  }

  // returns the data
  searchChanged() {
    this.results = this.foodService.searchData(this.searchTerm);
    console.log('res', this.results);
  }

  ionViewDidEnter() {
    // this.navigateRoot();
  }
}
