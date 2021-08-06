import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get auth() {
    return {...this._authService.auth};
  }

  constructor( private router: Router,
               private _authService: AuthService ) { }

  ngOnInit(): void {
    
  }


  logout(){
    this._authService.logout();
    this.router.navigate(['./auth']);
  }

}
