import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { connectedUserSelector } from 'src/app/store/userFlow/user.selector';
import { Roles } from 'src/app/core/constants/enums';
import { getCurrentUser, setIsAuthenticated } from 'src/app/store/userFlow/user.action';
import { GLOBAL_SERVICE } from 'src/app/core/constants/tokens.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  _store = inject(Store<AppStateInterface>)
  _globalService = inject(GLOBAL_SERVICE);
  _router = inject(Router);
  currentUser: LoginDto | null = null;
  agent = Roles.AGENT;
  user = Roles.USER;
  isDarkMode = false;

  constructor() {
    this._store.select(connectedUserSelector).subscribe(
      (user) => {
        console.log('user : ', user)
        this.currentUser = user
      }
    )
  }

  ngOnInit(): void {
      
  }

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    this._globalService.setIsDarkMode(this.isDarkMode);
  }

}
