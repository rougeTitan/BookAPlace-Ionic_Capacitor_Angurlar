import { Component, Input, OnInit } from '@angular/core';
import {Place} from '../../place.model';
import { IonMenuToggle } from '@ionic/angular';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.page.html',
  styleUrls: ['./offer-item.page.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() offer:Place;

  constructor() { }

  ngOnInit() {
  
  }
  getDummyDate(){
    return new Date();
  }

}
