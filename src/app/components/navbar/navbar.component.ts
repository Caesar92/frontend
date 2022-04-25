import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router, private token: TokenStorageService) { }

  connectedUser: boolean = false;

  ngOnInit(): void {
    if(Object.keys(this.token.getUser()).length === 0){
      this.connectedUser = false;
    }
    else{
      this.connectedUser = true;
    }
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

}
