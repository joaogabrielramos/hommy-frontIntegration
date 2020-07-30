import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public republicasArray=[];

  // republicas: Republica[];
  // republicas2: Republica2[];

  constructor(public searchService:SearchService) {}

  ngOnInit() {
    this.getListRepublics();
  }

    getListRepublics(){
      this.searchService.getListRepublics().subscribe ( (res) => {
        this.republicasArray = res;
      });
    }

}

    


