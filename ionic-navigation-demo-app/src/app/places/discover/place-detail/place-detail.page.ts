import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController,ModalController,ActionSheetController } from '@ionic/angular';
import {PlaceService} from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    this.actionSheetCtrl.create({
      header: 'choose an Action',
      buttons:[
        {
          text: 'select date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random date',
          handler: ()=>{
            this.openBookingModal('random');
          }
        },
        {
          text:'cancel',
          role: 'cancel'
        }
      ]
    }).then (actionSheetEl =>{
       actionSheetEl.present();
    });
  }

  openBookingModal(mode: 'select'| 'random'){
    console.log(mode);
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace:this.place}
    }).then(modelEl => {
      modelEl.present();
      return modelEl.onDidDismiss();
    }).then(resultData=>{
      console.log(resultData.data, resultData.role);
      if(resultData.role==='confirm'){
        console.log('BOOKEd!');
      }
    });
  }

}
