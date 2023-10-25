import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authSerice: AuthService, private router: Router, private loadingCtrl: LoadingController){ }

  ngOnInit() { }

  onLogin(){
    this.isLoading = true;
    this.authSerice.login();
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging in...'}).then(loadingElm => {
      loadingElm.present();
      setTimeout(()=>{
        this.isLoading = false;
        loadingElm.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      },1500);
    });
  }

}
